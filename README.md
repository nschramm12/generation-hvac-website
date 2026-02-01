# HVAC Website Template

A professional, fully-responsive website template for HVAC businesses with easy client customization.

## What's Included

- ✅ **Residential Services Page** (`index.html`)
- ✅ **Commercial/Government Services Page** (`commercial.html`)
- ✅ **Easy Configuration System** (`config.js`)
- ✅ **Contact Form Integration** (Netlify, Formspree, or custom)
- ✅ **Mobile-Responsive Design**
- ✅ **Client Setup Guide** (see below)

## For Clients: Getting Started

**Want to customize this for your business? It's easy!**

👉 **[Read the CLIENT-SETUP-GUIDE.md](CLIENT-SETUP-GUIDE.md)** for step-by-step instructions

### Quick 3-Step Setup:

1. **Edit `config.js`** - Add your company name, phone, email, etc.
2. **Choose a form service** - We recommend Netlify (free & easy)
3. **Replace images** - Add your logo and photos

**No coding required!** Everything is configured through the `config.js` file.

## Features

### Fully Responsive
- Desktop, tablet, and mobile-friendly
- Hamburger menu on mobile devices
- Touch-optimized interactions

### Contact Forms
- Multiple form service options (Netlify, Formspree, custom)
- Easy to configure
- No backend coding required

### SEO Ready
- Semantic HTML structure
- Meta tags for search engines
- Fast loading performance

### Easy Customization
- Single configuration file (`config.js`)
- No need to edit HTML directly
- Automatic updates across all pages

## File Structure

```
generation-hvac-website/
├── index.html              # Residential services page
├── commercial.html         # Commercial/government services page
├── config.js              # ⭐ EDIT THIS - Your configuration
├── apply-config.js        # Automatic configuration (don't edit)
├── CLIENT-SETUP-GUIDE.md  # Step-by-step setup instructions
├── config.example.js      # Example configuration
├── README.md              # This file
└── [images]               # Your logo, photos, etc.
```

## Form Service Options

This template supports multiple form services:

| Service | Free Tier | Setup Time | Best For |
|---------|-----------|------------|----------|
| **Netlify** | 100 submissions/month | 5 minutes | Most users (recommended) |
| **Formspree** | 50 submissions/month | 3 minutes | Quick alternative |
| **Custom** | N/A | Varies | Advanced users with existing backend |

## Deployment Options

### Recommended: Netlify
1. Drag and drop your folder to [netlify.com](https://netlify.com)
2. Get instant HTTPS and form handling
3. Free custom domain support

### Alternative: GitHub Pages
1. Push to GitHub repository
2. Enable Pages in settings
3. Free hosting at username.github.io

### Traditional: FTP Upload
- Upload to any web host (GoDaddy, Bluehost, etc.)
- Note: Forms may require additional configuration

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

1. **Read the [CLIENT-SETUP-GUIDE.md](CLIENT-SETUP-GUIDE.md)** - Most questions are answered here
2. **Check the example** - See `config.example.js` for a filled-out configuration
3. **Form provider docs** - Netlify and Formspree have excellent documentation

## Technical Details (For Developers)

### Technologies Used
- Pure HTML5, CSS3, JavaScript
- No frameworks or dependencies
- No build process required
- Vanilla JavaScript for configuration

### Customization Beyond config.js

If you want to change colors, layout, or content:
- Edit the `<style>` section in the HTML files
- Modify HTML structure as needed
- CSS uses CSS custom properties (variables) for theming

### Form Handler Implementation

The `apply-config.js` script automatically configures forms based on your chosen provider:
- **Netlify**: Adds `data-netlify="true"` attribute
- **Formspree**: Sets action to Formspree endpoint
- **Custom**: Points to your custom endpoint

---

## License

This template is provided as-is for commercial use by clients.

---

**Questions?** Check the [CLIENT-SETUP-GUIDE.md](CLIENT-SETUP-GUIDE.md) for detailed instructions!
