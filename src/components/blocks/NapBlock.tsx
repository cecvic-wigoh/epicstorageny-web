import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { Location } from "@/lib/site";
import { contact, hours } from "@/lib/content";

export default function NapBlock({ location }: { location: Location }) {
  return (
    <div className="rounded-2xl border border-ink-300/60 bg-white p-7 shadow-sm">
      <h3 className="font-display text-xl font-bold">{location.name}</h3>
      <dl className="mt-4 flex flex-col gap-3 text-sm">
        <div className="flex items-start gap-3">
          <dt className="sr-only">Address</dt>
          <MapPin aria-hidden size={18} className="mt-0.5 shrink-0 text-brand-700" />
          <dd className="text-ink-700">
            {location.street}
            <br />
            {location.city}, {location.state} {location.zip}
          </dd>
        </div>
        <div className="flex items-start gap-3">
          <dt className="sr-only">Phone</dt>
          <Phone aria-hidden size={18} className="mt-0.5 shrink-0 text-brand-700" />
          <dd>
            <a href={contact.phoneHref} className="font-semibold text-ink-900 hover:text-brand-800">
              {contact.phone}
            </a>
          </dd>
        </div>
        <div className="flex items-start gap-3">
          <dt className="sr-only">Email</dt>
          <Mail aria-hidden size={18} className="mt-0.5 shrink-0 text-brand-700" />
          <dd>
            <a href={contact.emailHref} className="text-ink-700 hover:text-brand-800">
              {contact.email}
            </a>
          </dd>
        </div>
        <div className="flex items-start gap-3">
          <dt className="sr-only">Hours</dt>
          <Clock aria-hidden size={18} className="mt-0.5 shrink-0 text-brand-700" />
          <dd className="text-ink-700">
            <div>
              <strong className="font-semibold text-ink-900">Office:</strong>{" "}
              {hours.officeLabel}
            </div>
            <div className="mt-1 text-ink-500">{hours.officeDetail}</div>
            <div className="mt-2">
              <strong className="font-semibold text-ink-900">Gate access:</strong>{" "}
              {hours.gateLabel}
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
