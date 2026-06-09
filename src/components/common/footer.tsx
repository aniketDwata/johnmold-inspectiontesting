import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <section className="py-20">
        <div className="container-clone grid overflow-hidden shadow-2xl md:grid-cols-[1.45fr_1fr]">
          <iframe
            title="John Mold Inspection & Testing location map"
            src="https://www.google.com/maps?q=Tarzana%20CA%2091356&output=embed"
            className="map-frame h-[365px] w-full border-0"
            loading="lazy"
          />
          <div className="bg-white p-10">
            <p className="section-kicker">Contact Us</p>
            <h2 className="mt-2 text-3xl font-black">
              Get In Touch <span className="text-[#35bc7f]">With Us</span>
            </h2>
            <address className="mt-7 grid gap-7 not-italic">
              <div>
                <p className="flex items-center gap-2 text-lg font-black text-[#35bc7f]">
                  <MapPin size={18} aria-hidden="true" />
                  Our Location
                </p>
                <p className="mt-2 text-[#61666d]">{site.address}</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-lg font-black text-[#35bc7f]">
                  <Phone size={18} aria-hidden="true" />
                  Our Contact
                </p>
                <a className="mt-2 block text-[#61666d]" href={site.phoneHref} data-gtm-event="click_to_call_footer_contact">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="flex items-center gap-2 text-lg font-black text-[#35bc7f]">
                  <Mail size={18} aria-hidden="true" />
                  Mail Us
                </p>
                <a className="mt-2 block text-[#61666d]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </address>
          </div>
        </div>
      </section>
      <div className="bg-[#1f2023] py-16 text-center text-white">
        <a href={site.mapUrl} className="mx-auto flex size-8 items-center justify-center rounded-full bg-[#35bc7f] text-sm font-black">
          G
        </a>
        <a href="/privacy-policy/" className="mt-7 inline-block border-b border-white/40 text-sm font-bold">
          Privacy Policy
        </a>
        <p className="mt-10 text-sm font-bold">
          Copyright ©2026 John mold inspection & testing . All rights reserved.
        </p>
      </div>
      <a href="#" aria-label="Back to top" className="fixed bottom-6 right-5 z-50 flex size-11 items-center justify-center rounded-full bg-[#35bc7f] text-2xl font-black text-white shadow-lg">
        ^
      </a>
    </footer>
  );
}
