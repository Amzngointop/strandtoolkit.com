"use client";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 bg-bg text-ink font-sans text-sm px-4 py-3 outline-none"
      />
      <button type="submit" className="bg-bg text-ink font-sans text-xs uppercase tracking-[0.08em] px-6 py-3">
        Subscribe
      </button>
    </form>
  );
}
