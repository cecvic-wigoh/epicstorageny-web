import { defineConfig } from "tinacms";

export default defineConfig({
  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "76790464-d1a9-489b-9440-210905865f36",
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
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
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "phone", label: "Phone (display, e.g. (716) 331-2882)" },
              { type: "string", name: "email", label: "Email Address" },
            ],
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
                ui: { component: "textarea" },
              },
              { type: "string", name: "gateLabel", label: "Gate Access (short label)" },
              {
                type: "string",
                name: "gateDetail",
                label: "Gate Access (explanation)",
                ui: { component: "textarea" },
              },
            ],
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
                ui: { component: "textarea" },
              },
              { type: "string", name: "eyebrow", label: "Eyebrow Label (e.g. Limited-time offer)" },
              { type: "string", name: "disclaimer", label: "Disclaimer (e.g. Ask us when you rent...)" },
            ],
          },
        ],
      },

      // ─── Locations (2 documents) ─────────────────────────────────────────
      {
        name: "location",
        label: "Locations",
        path: "content/locations",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Full Name (e.g. Epic Storage — Clarence Center)" },
          { type: "string", name: "shortName", label: "Short Name (e.g. Clarence Center)" },
          { type: "string", name: "street", label: "Street Address" },
          { type: "string", name: "city", label: "City" },
          { type: "string", name: "zip", label: "ZIP Code" },
          {
            type: "string",
            name: "blurb",
            label: "Location Blurb (shown on homepage card)",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "areasServed",
            label: "Areas Served (one per line — used for local SEO)",
            list: true,
          },
        ],
      },

      // ─── Unit sizes (6 documents) ─────────────────────────────────────────
      {
        name: "unitSize",
        label: "Unit Sizes",
        path: "content/unit-sizes",
        format: "json",
        fields: [
          { type: "string", name: "label", label: "Label (e.g. 10′ × 10′)" },
          { type: "string", name: "dims", label: "Dimensions (e.g. 10×10)" },
          { type: "number", name: "area", label: "Area (sq ft)" },
          { type: "number", name: "monthly", label: "Monthly Price ($)" },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "features",
            label: "Features (one per line)",
            list: true,
          },
          {
            type: "string",
            name: "idealFor",
            label: "Ideal For (one per line)",
            list: true,
          },
        ],
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
              itemProps: (item: { q?: string }) => ({
                label: item?.q ?? "New FAQ",
              }),
            },
            fields: [
              { type: "string", name: "q", label: "Question" },
              {
                type: "string",
                name: "a",
                label: "Answer",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
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
          { type: "string", name: "pageHeading", label: "Page Heading" },
          { type: "string", name: "pageSubheading", label: "Page Subheading", ui: { component: "textarea" } },
          { type: "string", name: "securityIntro", label: "Security Intro" },
          { type: "string", name: "accessIntro", label: "Access Intro" },
          { type: "string", name: "convenienceIntro", label: "Convenience Intro" },
          { type: "string", name: "cameraHeading", label: "Camera Section Heading" },
          { type: "string", name: "cameraParagraph1", label: "Camera Paragraph 1", ui: { component: "textarea" } },
          { type: "string", name: "cameraParagraph2", label: "Camera Paragraph 2", ui: { component: "textarea" } },
          { type: "string", name: "cameraParagraph3", label: "Camera Paragraph 3", ui: { component: "textarea" } },
          {
            type: "string",
            name: "security",
            label: "Security Features (one per line)",
            list: true,
          },
          {
            type: "string",
            name: "access",
            label: "Access Features (one per line)",
            list: true,
          },
          {
            type: "string",
            name: "convenience",
            label: "Convenience Features (one per line)",
            list: true,
          },
        ],
      },

      // ─── Home Page (global singleton) ────────────────────────────────────
      {
        name: "homePage",
        label: "Home Page",
        path: "content",
        format: "json",
        ui: { global: true },
        match: { include: "home" },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "heading", label: "Main Heading" },
              { type: "string", name: "subheading", label: "Subheading", ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlight Bullets", list: true },
            ]
          },
          {
            type: "object", name: "proofPoints", label: "Proof Points Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "string", name: "subheading", label: "Section Subheading" },
              {
                type: "object", name: "cards", label: "Cards", list: true,
                ui: { itemProps: (item: { title?: string }) => ({ label: item?.title ?? "Card" }) },
                fields: [
                  { type: "string", name: "title", label: "Card Title" },
                  { type: "string", name: "body", label: "Card Body", ui: { component: "textarea" } },
                ]
              },
            ]
          },
          {
            type: "object", name: "pricing", label: "Pricing Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "string", name: "subheading", label: "Section Subheading" },
              { type: "string", name: "footerNote", label: "Footer Note", ui: { component: "textarea" } },
              { type: "string", name: "smallSubtitle", label: "Small Tier Subtitle" },
              { type: "string", name: "smallFits", label: "Small Tier Fits" },
              { type: "string", name: "mediumSubtitle", label: "Medium Tier Subtitle" },
              { type: "string", name: "mediumFits", label: "Medium Tier Fits" },
              { type: "string", name: "largeSubtitle", label: "Large Tier Subtitle" },
              { type: "string", name: "largeFits", label: "Large Tier Fits" },
            ]
          },
        ]
      },

      // ─── About Page (global singleton) ───────────────────────────────────
      {
        name: "aboutPage",
        label: "About Page",
        path: "content",
        format: "json",
        ui: { global: true },
        match: { include: "about" },
        fields: [
          { type: "string", name: "heroHeading", label: "Hero Heading" },
          { type: "string", name: "heroSubheading", label: "Hero Subheading", ui: { component: "textarea" } },
          { type: "string", name: "whyHeading", label: "\"Why\" Section Heading" },
          { type: "string", name: "whyParagraph1", label: "\"Why\" Paragraph 1", ui: { component: "textarea" } },
          { type: "string", name: "whyParagraph2", label: "\"Why\" Paragraph 2", ui: { component: "textarea" } },
          { type: "string", name: "careHeading", label: "\"What We Care About\" Heading" },
          {
            type: "object", name: "values", label: "Values List", list: true,
            ui: { itemProps: (item: { title?: string }) => ({ label: item?.title ?? "Value" }) },
            fields: [
              { type: "string", name: "title", label: "Value Title" },
              { type: "string", name: "body", label: "Value Description", ui: { component: "textarea" } },
            ]
          },
          { type: "string", name: "whereHeading", label: "\"Where to find us\" Heading" },
          { type: "string", name: "whereBody", label: "\"Where to find us\" Body", ui: { component: "textarea" } },
          { type: "string", name: "getInTouchHeading", label: "\"Get in touch\" Heading" },
          { type: "string", name: "getInTouchBody", label: "\"Get in touch\" Body", ui: { component: "textarea" } },
        ]
      },
    ],
  },
});
