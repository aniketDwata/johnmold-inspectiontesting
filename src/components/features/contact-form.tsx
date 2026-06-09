"use client";

import { useFormState, useFormStatus } from "react-dom";
import { requestQuote, type QuoteState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const initialState: QuoteState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useFormState(requestQuote, initialState);

  return (
    <form action={formAction} className="grid gap-3" data-gtm-form="schedule_inspection">
      <Input name="name" autoComplete="name" placeholder="Name" className="form-field rounded-none border-[#9da1a7]" required />
      <Input name="email" type="email" autoComplete="email" placeholder="Email" className="form-field rounded-none border-[#9da1a7]" />
      <Input name="phone" type="tel" autoComplete="tel" placeholder="Phone" className="form-field rounded-none border-[#9da1a7]" required />
      <Input name="appointmentDate" placeholder="Date of Appointment" className="form-field rounded-none border-[#9da1a7]" />
      <Textarea name="message" placeholder="Message" className="form-field min-h-24 rounded-none border-[#9da1a7]" required />
      <label className="flex items-start gap-2 text-sm leading-7 text-[#61666d]">
        <input name="smsConsent" type="checkbox" className="mt-2 size-3.5 shrink-0" />
        <span>
          I consent to receive appointment reminders, service updates, and promotional SMS messages from John Mold Testing Inc. at the phone number I provided. Message & data rates may apply. Message frequency may vary. Reply STOP to cancel, HELP for help. View our{" "}
          <a className="text-[#35bc7f]" href="/privacy-policy/">Privacy Policy</a>{" "}
          and <a className="text-[#35bc7f]" href="/sms-terms/">SMS Terms</a>.
        </span>
      </label>
      <SubmitButton />
      {state.message ? (
        <p
          className={
            state.ok
              ? "bg-[#e4f7ee] px-4 py-3 text-sm font-bold text-[#1b8f61]"
              : "bg-[#fff1e8] px-4 py-3 text-sm font-bold text-[#9b3f16]"
          }
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-fit rounded-[999px] bg-[#35bc7f] px-7 hover:bg-[#22a66d]">
      {pending ? "Sending..." : "Send"}
    </Button>
  );
}
