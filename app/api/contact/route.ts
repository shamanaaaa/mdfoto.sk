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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: "Neplatné údaje formulára." }, { status: 400 });
    }

    const { name, email, phone, selectedPackage, note } = parsed.data;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safePackage = escapeHtml(selectedPackage);
    const safeNote = escapeHtml(note || "-").replace(/\n/g, "<br/>");

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
        <div style="margin:0;padding:0;background:#FAF8F5;font-family:Inter,Arial,sans-serif;color:#1a1a1a;">
          <div style="max-width:640px;margin:0 auto;padding:28px 16px;">
            <div style="background:#111111;color:#FDFCFA;padding:20px 24px;border-radius:12px 12px 0 0;">
              <div style="font-family:'Playfair Display',Georgia,serif;letter-spacing:0.2em;font-size:20px;">MDFOTO</div>
              <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#EDE5D8;">Nový dopyt z kontaktného formulára</div>
            </div>

            <div style="background:#ffffff;border:1px solid #EDE5D8;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
              <h2 style="margin:0 0 16px 0;font-family:'Playfair Display',Georgia,serif;font-size:28px;line-height:1.25;color:#111111;">Nový zákaznícky dopyt</h2>
              <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#404040;">
                Na webe bol odoslaný nový kontaktný formulár. Nižšie sú všetky údaje od klienta.
              </p>

              <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;background:#FDFCFA;border:1px solid #F5F0E8;border-radius:10px;overflow:hidden;">
                <tr>
                  <td style="padding:12px 14px;border-bottom:1px solid #F5F0E8;font-size:13px;color:#737373;width:32%;">Meno</td>
                  <td style="padding:12px 14px;border-bottom:1px solid #F5F0E8;font-size:14px;color:#1a1a1a;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;border-bottom:1px solid #F5F0E8;font-size:13px;color:#737373;">Email</td>
                  <td style="padding:12px 14px;border-bottom:1px solid #F5F0E8;font-size:14px;color:#1a1a1a;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;border-bottom:1px solid #F5F0E8;font-size:13px;color:#737373;">Telefón</td>
                  <td style="padding:12px 14px;border-bottom:1px solid #F5F0E8;font-size:14px;color:#1a1a1a;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:13px;color:#737373;">Balík</td>
                  <td style="padding:12px 14px;font-size:14px;color:#1a1a1a;">${safePackage}</td>
                </tr>
              </table>

              <div style="margin-top:16px;padding:14px;background:#FAF8F5;border:1px solid #F5F0E8;border-radius:10px;">
                <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#B08070;margin-bottom:8px;">Poznámka klienta</div>
                <div style="font-size:14px;line-height:1.7;color:#2d2d2d;">${safeNote}</div>
              </div>
            </div>
          </div>
        </div>
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
