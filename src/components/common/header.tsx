import Image from "next/image";
import { ChevronDown, MapPin, Menu, Phone } from "lucide-react";
import { servicePath, services, site } from "@/lib/site";

export function Header() {
  return (
    <header>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="topbar hidden md:block">
        <div className="container-clone flex min-h-11 items-center justify-end gap-3">
          <a className="inline-flex items-center gap-1" href={site.phoneHref} data-gtm-event="click_to_call_topbar">
            <Phone size={14} aria-hidden="true" />
            {site.phone}
          </a>
          <span>|</span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} aria-hidden="true" />
            {site.address}
          </span>
        </div>
      </div>
      <nav className="main-nav" aria-label="Primary navigation">
        <div className="container-clone flex h-24 items-center justify-between gap-6">
          <a href="/" aria-label={site.name} className="relative block h-20 w-36 shrink-0">
            <Image src={site.logo} alt="Logo" fill sizes="144px" className="object-contain object-left" priority unoptimized />
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/about-us/">About us</a>
            <div className="group relative">
              <a className="nav-link inline-flex items-center gap-1" href="#">
                Our Services <ChevronDown size={13} aria-hidden="true" />
              </a>
              <div className="dropdown absolute left-0 top-full w-64 bg-white py-3 shadow-xl ring-1 ring-black/10">
                {services.map((service) => (
                  <a key={service.slug} className="block px-5 py-3 text-sm font-bold text-[#4d5157] hover:bg-[#f4fbf8] hover:text-[#35bc7f]" href={servicePath(service)}>
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
            <a className="nav-link" href="/contact-us/">Contact us</a>
            <a className="phone-pill" href={site.phoneHref} data-gtm-event="click_to_call_nav">
              {site.phone}
            </a>
          </div>
          <a href={site.phoneHref} className="phone-pill hidden sm:inline-flex lg:hidden">
            Free Quote
          </a>
          <button className="inline-flex size-11 items-center justify-center rounded-md border border-black/10 lg:hidden" aria-label="Open menu">
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
