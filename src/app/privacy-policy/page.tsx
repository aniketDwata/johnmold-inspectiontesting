import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section id="content" className="py-24">
      <div className="container-clone max-w-4xl">
        <h1 className="clone-h2">Privacy Policy</h1>
        <p className="clone-p mt-6">
          John Mold Inspection & Testing uses submitted contact information to
          respond to service requests, schedule appointments, and provide
          inspection-related updates. We do not sell personal information.
        </p>
        <p className="clone-p mt-5">
          For privacy questions, contact us at info@johnmoldinspectiontesting.com.
        </p>
      </div>
    </section>
  );
}
