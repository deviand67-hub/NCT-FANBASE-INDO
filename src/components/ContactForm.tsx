"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="border border-brand-100 bg-brand-50 p-6 text-sm text-brand-800">
        <p className="font-semibold">Terima kasih telah menghubungi kami.</p>
        <p className="mt-1">Pesan Anda telah kami terima dan akan segera kami tindaklanjuti.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-neutral-800">
          Nama
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-neutral-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-neutral-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-neutral-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-semibold text-neutral-800">
          Subjek
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="border border-neutral-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-neutral-800">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-neutral-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <button
        type="submit"
        className="w-fit rounded-sm bg-brand-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
      >
        Kirim Pesan
      </button>
    </form>
  );
}
