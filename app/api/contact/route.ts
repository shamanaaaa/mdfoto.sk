import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional().default(""),
  selectedPackage: z.string().min(2).max(200),
  note: z.string().max(2000).optional().default(""),
});

function getEnvOrThrow(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env variable: ${key}`);
  }
  return value;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: "Neplatné údaje formulára." }, { status: 400 });
    }

    const { name, email, phone, selectedPackage, note } = parsed.data;

    const smtpHost = getEnvOrThrow("SMTP_HOST");
    const smtpPort = Number(getEnvOrThrow("SMTP_PORT"));
    const smtpUser = getEnvOrThrow("SMTP_USER");
    const smtpPass = getEnvOrThrow("SMTP_PASS");
    const smtpFrom = getEnvOrThrow("SMTP_FROM");
    const smtpTo = process.env.SMTP_TO || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: email,
      subject: `Nový dopyt z webu – ${name}`,
      text: [
        "Nový dopyt z kontaktného formulára MDFOTO",
        "",
        `Meno: ${name}`,
        `Email: ${email}`,
        `Telefón: ${phone || "-"}`,
        `Balík: ${selectedPackage}`,
        "",
        "Poznámka:",
        note || "-",
      ].join("\n"),
      html: `
        <h2>Nový dopyt z kontaktného formulára MDFOTO</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefón:</strong> ${phone || "-"}</p>
        <p><strong>Balík:</strong> ${selectedPackage}</p>
        <p><strong>Poznámka:</strong><br/>${(note || "-").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submit error:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Formulár sa nepodarilo odoslať. Skúste to prosím znova alebo zavolajte na 0948 505 587.",
      },
      { status: 500 }
    );
  }
}
