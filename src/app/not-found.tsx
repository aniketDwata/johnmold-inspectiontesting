import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-4xl font-black">Page not found</h1>
      <p className="mt-4 text-[#4d5d54]">
        The inspection page you requested is no longer available.
      </p>
      <LinkButton href="/" className="mt-8">
        Back to Home
      </LinkButton>
    </section>
  );
}
