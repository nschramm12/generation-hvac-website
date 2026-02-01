// ============================================
// WEBSITE CONFIGURATION FILE
// ============================================
// Edit the values below to customize your website
// DO NOT change the property names (the words before the colon)
// ONLY change the values (text inside the quotes)

const CONFIG = {

  // ========== COMPANY INFORMATION ==========
  company: {
    name: "Generations Heating & Air Conditioning",
    phone: "6194860003",          // Phone number (numbers only, no dashes or spaces)
    phoneFormatted: "(619) 486-0003",  // Formatted phone number for display
    email: "info@generationshvac.com",
    foundedYear: "1996",
    tagline: "Family-owned since 1996 - Serving San Diego County"
  },

  // ========== FORM CONFIGURATION ==========
  // Choose your form service: "netlify", "formspree", "custom", or "none"
  forms: {
    provider: "netlify",  // Options: "netlify", "formspree", "custom", "none"

    // If using Formspree, add your form ID here
    formspreeId: "",  // Example: "xpznwvnz"

    // If using a custom endpoint, add the URL here
    customEndpoint: "",  // Example: "https://yourdomain.com/api/contact"

    // Form name (for Netlify or your backend)
    formName: "contact"
  },

  // ========== BRANDING & ASSETS ==========
  branding: {
    logo: "GenHvacLogo.png",
    favicon: "GenHvacFavicon.png"
  },

  // ========== SERVICE AREA ==========
  serviceArea: {
    primary: "El Cajon and the greater San Diego area",
    regions: ["Southern California", "San Diego County", "Riverside County"],
    neighborhoods: "173+"  // Number of neighborhoods covered
  },

  // ========== STATISTICS (Hero Section) ==========
  stats: {
    systemsServiced: "115+",
    reviews: "58+",
    neighborhoodsCovered: "173+"
  },

  // ========== SEO & METADATA ==========
  seo: {
    title: "Generations Heating & Air Conditioning - HVAC Services in San Diego",
    titleCommercial: "Government & Commercial Contracting - Generations Heating & Air Conditioning",
    description: "Trusted HVAC repairs, installs, and maintenance across El Cajon and the greater San Diego area."
  }
};

// DO NOT EDIT BELOW THIS LINE
// This makes the config available to your HTML pages
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
