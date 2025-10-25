# Troubleshooting Guide

## 🚨 Common Issues & Solutions

### **1. Can't Start the Development Server**

**Error:** `npm run dev` fails or shows errors

**Solutions:**

```bash
# Make sure you're in the right directory
cd redco-youth-ministry

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try again
npm run dev
```

### **2. TypeScript Errors**

**Error:** TypeScript compilation errors

**Solutions:**

```bash
# Check TypeScript version
npx tsc --version

# Clear TypeScript cache
rm -rf node_modules/.cache
npm run build
```

### **3. Build Errors**

**Error:** `npm run build` fails

**Solutions:**

```bash
# Check for syntax errors
npm run lint

# Fix any linting issues
npm run build
```

### **4. Port Already in Use**

**Error:** `Port 5173 is already in use`

**Solutions:**

```bash
# Kill process using port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### **5. Module Not Found Errors**

**Error:** `Cannot resolve module`

**Solutions:**

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check if all dependencies are installed
npm list
```

### **6. React Router Issues**

**Error:** Pages not loading or 404 errors

**Solutions:**

- Make sure you're using the correct routes
- Check that all page components are properly exported
- Verify the routing setup in `App.tsx`

### **7. CSS Module Issues**

**Error:** Styles not loading

**Solutions:**

- Check that CSS module files exist
- Verify import statements
- Ensure class names match between TSX and CSS files

### **8. Form Submission Issues**

**Error:** Forms not working

**Solutions:**

- Check browser console for errors
- Verify form validation rules
- Test with different browsers

## 🔧 **Quick Fixes**

### **Reset Everything:**

```bash
# Complete reset
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### **Check Node.js Version:**

```bash
node --version
# Should be 16+ for React 18
```

### **Check npm Version:**

```bash
npm --version
# Should be 8+
```

## 📱 **Browser Issues**

### **Clear Browser Cache:**

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache and cookies
- Try incognito/private mode

### **Check Browser Console:**

- Open Developer Tools (`F12`)
- Check Console tab for errors
- Check Network tab for failed requests

## 🚀 **Deployment Issues**

### **GitHub Pages:**

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### **Netlify:**

- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

## 📞 **Still Having Issues?**

1. **Check the console** for specific error messages
2. **Try a different browser** to isolate the issue
3. **Restart your development server**
4. **Clear all caches** (browser + npm)
5. **Check the terminal** for build errors

## 🎯 **Quick Health Check**

Run this to verify everything is working:

```bash
# 1. Install dependencies
npm install

# 2. Check for errors
npm run lint

# 3. Build the project
npm run build

# 4. Start development server
npm run dev
```

If all steps complete without errors, your project is ready! 🎉

---

**Need more help?** Check the console for specific error messages and share them for targeted assistance.
