"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const packageOptions = [
  "Tehotenské – Balík 1 (90€)",
  "Tehotenské – Balík 2 (130€)",
  "Rodinné/Narodeninové – Balík 1 (80€)",
  "Rodinné/Narodeninové – Balík 2 (130€)",
  "Novorodenecké – Balík 1 (100€)",
  "Novorodenecké – Balík 2 (150€)",
  "Individuálna dohoda",
];

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(packageOptions[0]);
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isValid = Boolean(name.trim() && email.trim());

  return (
    <form
      className="space-y-5"
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitError("");

        if (!isValid) {
          return;
        }

        try {
          setIsSubmitting(true);

          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              selectedPackage,
              note,
            }),
          });

          const result = (await response.json()) as {
            ok: boolean;
            message?: string;
          };

          if (!response.ok || !result.ok) {
            setSubmitError(
              result.message ||
                "Formulár sa nepodarilo odoslať. Skúste to prosím znova."
            );
            return;
          }

          router.push("/rezervacia-potvrdenie?odoslane=1");
        } catch {
          setSubmitError(
            "Formulár sa nepodarilo odoslať. Skúste to prosím znova alebo zavolajte na 0948 505 587."
          );
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="space-y-2 text-sm">
          <span className="text-charcoal-700">Meno a priezvisko *</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-cream-300 bg-cream-50 px-4 py-3 outline-none focus:border-rose-muted"
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-charcoal-700">Email *</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-cream-300 bg-cream-50 px-4 py-3 outline-none focus:border-rose-muted"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="space-y-2 text-sm">
          <span className="text-charcoal-700">Telefón</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-cream-300 bg-cream-50 px-4 py-3 outline-none focus:border-rose-muted"
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-charcoal-700">Vybraný balík</span>
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="w-full border border-cream-300 bg-cream-50 px-4 py-3 outline-none focus:border-rose-muted"
          >
            {packageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm block">
        <span className="text-charcoal-700">Poznámka pre fotografku</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={6}
          className="w-full border border-cream-300 bg-cream-50 px-4 py-3 outline-none focus:border-rose-muted"
        />
      </label>

      {submitError ? (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-primary"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "Odosielam..." : "Odoslať dopyt"}
      </button>
    </form>
  );
}
