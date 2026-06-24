"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4 mb-14" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted block mb-1">Name</label>
        <input type="text" className="w-full bg-card border border-divider px-4 py-3 font-sans text-sm outline-none" />
      </div>
      <div>
        <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted block mb-1">Email</label>
        <input type="email" className="w-full bg-card border border-divider px-4 py-3 font-sans text-sm outline-none" />
      </div>
      <div>
        <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted block mb-1">Message</label>
        <textarea rows={5} className="w-full bg-card border border-divider px-4 py-3 font-sans text-sm outline-none" />
      </div>
      <button type="submit" className="bg-ink text-bg font-sans text-xs uppercase tracking-[0.08em] px-6 py-3 w-fit hover:bg-inkHover">
        Send Message
      </button>
    </form>
  );
}
