import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms",
  alternates: {
    canonical: "/sms-terms/",
  },
};

export default function SmsTermsPage() {
  return (
    <section id="content" className="py-24">
      <div className="container-clone max-w-4xl">
        <h1 className="clone-h2">SMS Terms</h1>
        <p className="clone-p mt-6">
          By opting in, you agree to receive appointment reminders, service
          updates, and related messages. Message and data rates may apply.
          Reply STOP to cancel or HELP for help.
        </p>
      </div>
    </section>
  );
}
