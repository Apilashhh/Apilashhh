# 🚀 Google Sites Embed Instructions

## Method 1: HTML Embed (Recommended)

### Step 1: Upload the HTML file
1. Go to your Google Sites page
2. Click on "Insert" → "Embed" → "Embed code"
3. Copy and paste the entire content from `/app/google-sites-embed.html`
4. Click "Insert"

### Step 2: Make it Full Width
1. Click on the embedded content
2. In the properties panel, set:
   - Width: 100%
   - Height: 800px (or adjust as needed)

## Method 2: External Hosting + iFrame

### Step 1: Host the HTML file
1. Upload `google-sites-embed.html` to:
   - **GitHub Pages** (free)
   - **Netlify** (free)
   - **Vercel** (free)
   - **Your own hosting**

### Step 2: Embed in Google Sites
1. In Google Sites, click "Insert" → "Embed" → "Embed code"
2. Use this iFrame code:

```html
<iframe 
    src="YOUR_HOSTED_URL_HERE" 
    width="100%" 
    height="800" 
    frameborder="0" 
    scrolling="yes"
    style="border: none; border-radius: 8px;">
</iframe>
```

## 🎨 Easy Editing Features

Your portfolio includes **click-to-edit** functionality:

### Editable Elements:
- ✏️ **Name** (click the name in navigation)
- ✏️ **Tagline** ("I see finance as a tool for innovation")
- ✏️ **Bio text** (hero section description)
- ✏️ **About section** (your detailed description)
- ✏️ **Project titles and descriptions**

### How to Edit:
1. Click on any text with the ✏️ hover indicator
2. A text box will appear
3. Edit your content
4. Press `Ctrl + Enter` or click outside to save

### Features Included:
- ✅ Typing animation: "hi, apilash" 
- ✅ Animated tree icon
- ✅ Your GitHub link: https://github.com/Apilashhh/Apilashhh
- ✅ No email icon (removed as requested)
- ✅ YouTube project with video camera icon
- ✅ Your profile photo
- ✅ All your finance background and projects
- ✅ Responsive design
- ✅ Professional dark theme with emerald accents

## 🔧 Advanced Customization

To modify colors, add projects, or change layout:

1. **Edit the JavaScript section** in the HTML file:
```javascript
const portfolioConfig = {
    personal: {
        name: "Your Name Here",
        tagline: "Your tagline...",
        // ... edit any values
    },
    // Add more projects, change colors, etc.
};
```

2. **Add new social links**:
```javascript
social: [
    { name: "GitHub", url: "https://github.com/yourusername", active: true },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", active: true },
    { name: "YouTube", url: "https://youtube.com/@yourchannel", active: true }
]
```

3. **Change colors** by modifying the CSS classes:
   - `text-emerald-400` → `text-blue-400` (for blue accent)
   - `bg-slate-900` → `bg-gray-900` (for different dark theme)

## 📱 Mobile Responsive
The portfolio automatically adapts to all screen sizes:
- Desktop: Full layout with animations
- Tablet: Responsive grid
- Mobile: Stacked layout with touch-friendly navigation

## 🎯 SEO Ready
- Semantic HTML structure
- Proper meta tags
- Alt text for images
- Clean URLs when hosted

## 💡 Pro Tips

1. **For best performance**: Host externally and use iFrame method
2. **For easy editing**: Use direct HTML embed method
3. **Update images**: Replace image URLs with your own hosted images
4. **Customize animations**: Modify the CSS animation classes
5. **Add more sections**: Copy the section structure and modify

Your portfolio is now ready to embed in Google Sites with full editing capabilities! 🎉