import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StrandToolKit's privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl md:text-[48px] text-ink leading-[1.1] mb-8">Privacy Policy</h1>
      <div className="font-sans text-sm leading-7 text-body flex flex-col gap-4">
        <p>Last updated: 2026. {site.name} ("we," "us," or "our") respects your privacy. This policy explains what information we collect and how we use it.</p>
        <h2 className="font-display text-xl text-ink mt-4">Information We Collect</h2>
        <p>We do not require account creation or store personal data beyond what you voluntarily submit through our contact form, such as your name, email address, and message content.</p>
        <h2 className="font-display text-xl text-ink mt-4">Third-Party Links</h2>
        <p>This site contains affiliate links to Amazon.com. We are not responsible for the privacy practices of third-party sites you visit through these links.</p>
        <h2 className="font-display text-xl text-ink mt-4">Cookies</h2>
        <p>We do not use cookies for tracking or advertising purposes on this site.</p>
        <h2 className="font-display text-xl text-ink mt-4">Contact</h2>
        <p>Questions about this policy can be sent to <a href={`mailto:${site.email}`} className="underline hover:text-accent">{site.email}</a>.</p>
      </div>
    </main>
  );
}
