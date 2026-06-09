import type { Metadata } from "next";
import { ContactForm } from "@/components/features/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact John Mold Inspection & Testing to schedule mold inspection and testing in Tarzana, CA.",
  alternates: {
    canonical: "/contact-us/",
  },
};

export default function ContactUsPage() {
  return (
    <section id="content" className="py-28">
      <div className="container-clone">
        <h1 className="mb-6 text-center text-4xl font-black text-[#61666d]">
          Get In Touch
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
