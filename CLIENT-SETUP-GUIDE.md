# Client Setup Guide

Welcome! This guide will help you customize this website for your business.

## Quick Start (5 Minutes)

### Step 1: Update Your Company Information

1. Open the file `config.js` in any text editor (Notepad, VS Code, etc.)
2. Update the following sections with your information:

```javascript
company: {
  name: "Your Company Name",
  phone: "1234567890",          // Numbers only, no dashes
  phoneFormatted: "(123) 456-7890",  // How you want it displayed
  email: "your@email.com",
  foundedYear: "2020",
  tagline: "Your company tagline here"
}
```

3. Save the file

### Step 2: Configure Your Contact Form

Choose one of the following options:

#### Option A: Netlify Forms (Recommended - Easy & Free)

1. In `config.js`, make sure it's set to:
   ```javascript
   forms: {
     provider: "netlify"
   }
   ```

2. Deploy your website to Netlify:
   - Sign up at [netlify.com](https://netlify.com)
   - Drag and drop your website folder
   - Done! Forms will automatically work

#### Option B: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your Form ID
3. Update `config.js`:
   ```javascript
   forms: {
     provider: "formspree",
     formspreeId: "YOUR_FORMSPREE_ID"  // Example: "xpznwvnz"
   }
   ```

#### Option C: Custom Endpoint

If you have your own backend:

```javascript
forms: {
  provider: "custom",
  customEndpoint: "https://yourdomain.com/api/contact"
}
```

#### Option D: No Forms (Testing Only)

```javascript
forms: {
  provider: "none"
}
```

### Step 3: Update Images & Branding

1. Replace these files with your own (keep the same names):
   - `GenHvacLogo.png` - Your company logo
   - `GenHvacFavicon.png` - Your favicon/icon
   - Hero photos and service images as needed

2. If you renamed your files, update `config.js`:
   ```javascript
   branding: {
     logo: "YourLogo.png",
     favicon: "YourFavicon.png"
   }
   ```

### Step 4: Test Your Website

1. Open `index.html` in your web browser
2. Check that:
   - ✓ Your company name appears
   - ✓ Phone numbers are correct
   - ✓ Logo and favicon are showing
   - ✓ Form submits properly

## Detailed Configuration Options

### Statistics (Hero Section)

Update the numbers shown on your homepage:

```javascript
stats: {
  systemsServiced: "200+",
  reviews: "100+",
  neighborhoodsCovered: "250+"
}
```

### Service Area

```javascript
serviceArea: {
  primary: "Your City and surrounding area",
  regions: ["State", "County 1", "County 2"],
  neighborhoods: "150+"
}
```

### SEO & Page Titles

```javascript
seo: {
  title: "Your Company - HVAC Services in Your City",
  titleCommercial: "Commercial Services - Your Company Name",
  description: "Your company description for search engines"
}
```

## Popular Form Services Comparison

| Service | Cost | Ease of Use | Best For |
|---------|------|-------------|----------|
| **Netlify Forms** | Free (100/month) | ⭐⭐⭐⭐⭐ Easiest | Most people |
| **Formspree** | Free (50/month) | ⭐⭐⭐⭐ Easy | Alternative to Netlify |
| **Google Forms** | Free (unlimited) | ⭐⭐⭐ Medium | Budget-conscious |
| **Custom Backend** | Varies | ⭐⭐ Technical | Custom needs |

## Deployment Options

### Option 1: Netlify (Recommended)

**Pros:** Free, automatic HTTPS, forms included, custom domain support

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your entire website folder
4. Get your site URL (yoursite.netlify.app)
5. Optional: Connect your custom domain

### Option 2: GitHub Pages

**Pros:** Free, simple, integrates with version control

**Steps:**
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in Settings
5. Access at username.github.io/repository-name

### Option 3: Traditional Web Hosting

Upload all files via FTP to any web hosting provider (GoDaddy, Bluehost, etc.)

## Custom Domain Setup

### Netlify
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow the DNS setup instructions

### GitHub Pages
1. Add a file named `CNAME` with your domain
2. Update your DNS records with your provider

## Troubleshooting

### Forms not submitting?

1. Check `config.js` - is the provider set correctly?
2. If using Formspree, did you verify your email?
3. If using Netlify, did you deploy to Netlify (not just open locally)?
4. Check browser console for errors (F12)

### Phone numbers not updating?

1. Make sure you updated both `phone` and `phoneFormatted` in `config.js`
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Hard refresh (Ctrl+F5)

### Images not showing?

1. Make sure image files are in the same folder as the HTML files
2. Check that filenames in `config.js` match your actual files
3. Image filenames are case-sensitive on some servers

## Files You Should Edit

✅ **config.js** - Your main configuration file (edit this!)
✅ **Images** - Replace with your own photos/logos

❌ **apply-config.js** - DO NOT EDIT (automatic configuration)
❌ **index.html** - Only edit if you know HTML
❌ **commercial.html** - Only edit if you know HTML

## Need More Help?

Common questions:

**Q: Can I change the colors/design?**
A: Yes, but you'll need to edit the CSS in the HTML files. This requires HTML/CSS knowledge.

**Q: Can I add more pages?**
A: Yes, duplicate one of the HTML files and modify the content.

**Q: Do I need to know coding?**
A: No! Just edit the values in `config.js` - no coding required.

**Q: Where do form submissions go?**
A: Depends on your provider:
- Netlify: Forms tab in your Netlify dashboard
- Formspree: Your Formspree account dashboard
- Custom: Wherever you configured your endpoint

## Support

If you need help, search for documentation for your chosen form provider:
- Netlify Forms: https://docs.netlify.com/forms/setup/
- Formspree: https://help.formspree.io/
- GitHub Pages: https://docs.github.com/pages

---

**That's it! You're all set up.** 🎉

Remember: Only edit `config.js` for basic customization. Everything else is automated!
