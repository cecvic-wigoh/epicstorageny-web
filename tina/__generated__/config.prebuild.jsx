// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── Site-wide settings (global singleton) ───────────────────────────
      {
        name: "settings",
        label: "Site Settings",
        path: "content",
        format: "json",
        ui: { global: true },
        match: { include: "settings" },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Brand",
            fields: [
              { type: "string", name: "legalName", label: "Legal Name" },
              { type: "string", name: "brand", label: "Brand Name" },
              { type: "string", name: "tagline", label: "Tagline" },
              {
                type: "string",
                name: "description",
                label: "Meta Description",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "phone", label: "Phone (display, e.g. (716) 331-2882)" },
              { type: "string", name: "email", label: "Email Address" }
            ]
          },
          {
            type: "object",
            name: "hours",
            label: "Hours",
            fields: [
              { type: "string", name: "officeLabel", label: "Office Hours (short label)" },
              {
                type: "string",
                name: "officeDetail",
                label: "Office Hours (explanation)",
                ui: { component: "textarea" }
              },
              { type: "string", name: "gateLabel", label: "Gate Access (short label)" },
              {
                type: "string",
                name: "gateDetail",
                label: "Gate Access (explanation)",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "promo",
            label: "Promo Banner",
            fields: [
              { type: "string", name: "headline", label: "Headline (e.g. First month 50% off)" },
              { type: "string", name: "terms", label: "Short Terms (e.g. 4-month minimum)" },
              {
                type: "string",
                name: "details",
                label: "Full Details",
                ui: { component: "textarea" }
              }
            ]
          }
        ]
      },
      // ─── Locations (2 documents) ─────────────────────────────────────────
      {
        name: "location",
        label: "Locations",
        path: "content/locations",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Full Name (e.g. Epic Storage \u2014 Clarence Center)" },
          { type: "string", name: "shortName", label: "Short Name (e.g. Clarence Center)" },
          { type: "string", name: "street", label: "Street Address" },
          { type: "string", name: "city", label: "City" },
          { type: "string", name: "zip", label: "ZIP Code" },
          {
            type: "string",
            name: "blurb",
            label: "Location Blurb (shown on homepage card)",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "areasServed",
            label: "Areas Served (one per line \u2014 used for local SEO)",
            list: true
          }
        ]
      },
      // ─── Unit sizes (6 documents) ─────────────────────────────────────────
      {
        name: "unitSize",
        label: "Unit Sizes",
        path: "content/unit-sizes",
        format: "json",
        fields: [
          { type: "string", name: "label", label: "Label (e.g. 10\u2032 \xD7 10\u2032)" },
          { type: "string", name: "dims", label: "Dimensions (e.g. 10\xD710)" },
          { type: "number", name: "area", label: "Area (sq ft)" },
          { type: "number", name: "monthly", label: "Monthly Price ($)" },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "features",
            label: "Features (one per line)",
            list: true
          },
          {
            type: "string",
            name: "idealFor",
            label: "Ideal For (one per line)",
            list: true
          }
        ]
      },
      // ─── FAQs (global singleton) ──────────────────────────────────────────
      {
        name: "faqs",
        label: "FAQs",
        path: "content",
        format: "json",
        ui: { global: true },
        match: { include: "faqs" },
        fields: [
          {
            type: "object",
            name: "items",
            label: "FAQ Items",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.q ?? "New FAQ"
              })
            },
            fields: [
              { type: "string", name: "q", label: "Question" },
              {
                type: "string",
                name: "a",
                label: "Answer",
                ui: { component: "textarea" }
              }
            ]
          }
        ]
      },
      // ─── Features (global singleton) ─────────────────────────────────────
      {
        name: "features",
        label: "Features",
        path: "content",
        format: "json",
        ui: { global: true },
        match: { include: "features" },
        fields: [
          {
            type: "string",
            name: "security",
            label: "Security Features (one per line)",
            list: true
          },
          {
            type: "string",
            name: "access",
            label: "Access Features (one per line)",
            list: true
          },
          {
            type: "string",
            name: "convenience",
            label: "Convenience Features (one per line)",
            list: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
