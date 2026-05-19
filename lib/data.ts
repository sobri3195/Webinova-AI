export const navItems = [
  ["/", "Dashboard"], ["/template-library", "Template"], ["/prompt-generator", "Prompt"], ["/page-preview", "Preview"], ["/seo-tracking", "SEO & Tracking"], ["/workflow-guide", "Panduan AI"], ["/export-center", "Export"]
];

export const templates = ["Login page","Profile page","Data table","Filter system","Form builder","Chart dan analytics","Dashboard","Report page","Slide / PDF page","Video page","Quiz page","E-course page","Product catalog","Online store","Payment gateway layout","Chat page","WhatsApp widget","Wiki / documentation page","Reservation page","Appointment booking","Event ticket page","CRM page","Iframe embed page","SEO settings page","Google Analytics integration","Google Search Console integration","Google Tag Manager integration"].map((title, i) => ({
  id: i + 1,
  title,
  category: i % 2 ? "Bisnis" : "UI",
  tags: ["modern", "responsive", "siap pakai"],
  description: `Template ${title} dengan struktur premium dan mudah disesuaikan.`
}));

export const activities = ["Menyimpan prompt ChatGPT untuk halaman toko.","Duplikasi template Dashboard Analitik.","Ekspor JSON untuk klien edukasi.","Update meta SEO untuk landing page."];
