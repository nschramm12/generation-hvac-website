# Quick Reference Card

## 📝 What to Edit

**File: `config.js`**

This is the ONLY file you need to edit for basic customization.

---

## ⚙️ Configuration Checklist

### 1. Company Information
```javascript
company: {
  name: "Your Company Name Here",
  phone: "1234567890",
  phoneFormatted: "(123) 456-7890",
  email: "your@email.com",
  foundedYear: "2020",
  tagline: "Your tagline here"
}
```

### 2. Form Service
**Pick ONE:**

✅ **Netlify** (Easiest)
```javascript
forms: {
  provider: "netlify"
}
```

✅ **Formspree**
```javascript
forms: {
  provider: "formspree",
  formspreeId: "your_formspree_id"
}
```

✅ **Custom Backend**
```javascript
forms: {
  provider: "custom",
  customEndpoint: "https://yoursite.com/api/contact"
}
```

### 3. Images
Replace these files:
- `GenHvacLogo.png` → Your logo
- `GenHvacFavicon.png` → Your favicon

### 4. Statistics (Optional)
```javascript
stats: {
  systemsServiced: "100+",
  reviews: "50+",
  neighborhoodsCovered: "150+"
}
```

---

## 🚀 Deploy Your Site

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag & drop your website folder
4. Done! ✅

### Option 2: GitHub Pages
1. Create GitHub account
2. Upload files to new repository
3. Enable Pages in Settings

### Option 3: Traditional Hosting
Upload via FTP to any host

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Forms not working | 1. Check `provider` in config.js<br>2. Deploy to Netlify (not just local) |
| Phone not updating | Update both `phone` AND `phoneFormatted` |
| Images not showing | Check filenames match exactly |
| Changes not appearing | Clear cache (Ctrl+F5) |

---

## 📁 File Guide

| File | Do I Edit? |
|------|------------|
| `config.js` | ✅ YES - Edit this! |
| `CLIENT-SETUP-GUIDE.md` | 📖 Read this |
| `index.html` | ❌ Only if you know HTML |
| `commercial.html` | ❌ Only if you know HTML |
| `apply-config.js` | ❌ Never edit |

---

## 📧 Where Do Form Submissions Go?

- **Netlify**: Netlify dashboard → Forms tab
- **Formspree**: Formspree dashboard
- **Custom**: Your configured endpoint

---

## 🎨 Want to Change Colors/Design?

You'll need to edit the `<style>` section in the HTML files.
This requires HTML/CSS knowledge.

---

## ✅ Testing Checklist

Before going live, check:
- [ ] Company name appears correctly
- [ ] Phone number works when clicked
- [ ] Logo and favicon show up
- [ ] Form submits successfully
- [ ] Test on mobile device
- [ ] Test on desktop browser

---

## 📞 Form Services Sign-Up Links

- **Netlify**: [netlify.com/signup](https://netlify.com/signup)
- **Formspree**: [formspree.io/register](https://formspree.io/register)

---

**Need more help?** → Read [CLIENT-SETUP-GUIDE.md](CLIENT-SETUP-GUIDE.md)
