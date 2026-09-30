"use client";

import { useId, type FormEvent } from "react";
import type { Dict } from "@/content/site";

// Builds an email from the form and opens it in the visitor's email app.
// Swap for a real form endpoint once one exists.
export function ContactForm({ t, to }: { t: Dict["contact"]; to: string }) {
  const id = useId();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const type = String(data.get("type") ?? "");
    const body = [`${t.name}: ${data.get("name")}`, `${t.email}: ${data.get("email")}`, "", String(data.get("message") ?? "")].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(`${t.subject}: ${type}`)}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "mt-1.5 w-full rounded-[1.1rem] bg-paper px-4 py-3 ring-1 ring-pine/10 transition-shadow outline-none placeholder:text-pine-soft/60 focus:ring-2 focus:ring-moss";

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] bg-mist p-5 sm:p-7">
      <fieldset>
        <legend className="font-medium">{t.typeLabel}</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {t.types.map((type, i) => (
            <label key={type} className="cursor-pointer">
              <input type="radio" name="type" value={type} defaultChecked={i === 0} className="peer sr-only" />
              <span className="block rounded-full px-4 py-2 ring-1 ring-pine/15 transition-colors peer-checked:bg-pine peer-checked:text-paper peer-checked:ring-pine peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-marigold hover:bg-sage/60 peer-checked:hover:bg-pine">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label htmlFor={`${id}-name`} className="block font-medium">
          {t.name}
          <input id={`${id}-name`} name="name" required autoComplete="name" className={`${field} font-normal`} />
        </label>
        <label htmlFor={`${id}-email`} className="block font-medium">
          {t.email}
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={`${field} font-normal`} />
        </label>
      </div>
      <label htmlFor={`${id}-message`} className="mt-4 block font-medium">
        {t.message}
        <textarea id={`${id}-message`} name="message" required rows={4} className={`${field} resize-y font-normal`} />
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-pine px-6 py-3.5 text-lg font-medium text-paper transition-colors hover:bg-moss sm:w-auto"
      >
        {t.submit}
      </button>
      <p className="mt-3 text-sm text-pine-soft">{t.note}</p>
    </form>
  );
}
