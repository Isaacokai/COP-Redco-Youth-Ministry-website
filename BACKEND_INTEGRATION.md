# Backend Integration Guide

This guide explains how to connect your forms to actual backend services for data collection and email notifications.

## 🚀 Current Status

**Forms are currently working in "demo mode"** - they show success messages but don't actually send data anywhere. This is perfect for development and testing!

## 📧 Integration Options

### 1. **Netlify Forms (Recommended for GitHub Pages)**

If you deploy to Netlify (which can host GitHub Pages), you can use Netlify Forms:

```html
<!-- Add to your form -->
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your form fields -->
</form>
```

**Benefits:**

- ✅ Free with Netlify hosting
- ✅ Automatic spam protection
- ✅ Email notifications
- ✅ Form submissions dashboard

### 2. **EmailJS (Client-side Email)**

Send emails directly from the browser without a backend:

```bash
npm install @emailjs/browser
```

```javascript
import emailjs from "@emailjs/browser";

const sendEmail = async (formData) => {
  await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    formData,
    "YOUR_PUBLIC_KEY"
  );
};
```

**Benefits:**

- ✅ No backend required
- ✅ Works with any hosting
- ✅ Free tier available
- ✅ Easy setup

### 3. **Custom Backend API**

Create your own backend (Node.js, Python, PHP, etc.):

```javascript
// Example API endpoint
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Save to database
  await saveToDatabase(req.body);

  // Send email notification
  await sendEmailNotification(req.body);

  res.json({ success: true });
});
```

### 4. **Third-party Services**

- **Formspree**: `https://formspree.io/`
- **Getform**: `https://getform.io/`
- **Typeform**: `https://typeform.com/`
- **Google Forms**: Free but less customizable

## 🔧 Implementation Steps

### Option A: EmailJS (Easiest)

1. **Sign up at EmailJS**: https://www.emailjs.com/
2. **Create email templates** for contact and registration
3. **Update the form service**:

```javascript
// src/services/formService.ts
import emailjs from "@emailjs/browser";

export const submitContactForm = async (data) => {
  try {
    await emailjs.send(
      "service_xxxxxxx", // Your service ID
      "template_xxxxxxx", // Your template ID
      data,
      "your_public_key"
    );
    return true;
  } catch (error) {
    console.error("EmailJS error:", error);
    return false;
  }
};
```

### Option B: Netlify Forms

1. **Deploy to Netlify** (can import from GitHub)
2. **Update forms to use Netlify**:

```html
<!-- Contact form -->
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p style="display: none;">
    <label>Don't fill this out: <input name="bot-field" /></label>
  </p>
  <!-- Your form fields -->
</form>
```

### Option C: Custom Backend

1. **Create backend API** (Node.js example):

```javascript
// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  // Send email
  const transporter = nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password",
    },
  });

  await transporter.sendMail({
    from: "your-email@gmail.com",
    to: "youth@redco.org",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Message:</strong> ${req.body.message}</p>
    `,
  });

  res.json({ success: true });
});

app.listen(3001, () => console.log("Server running on port 3001"));
```

2. **Update form service**:

```javascript
export const submitContactForm = async (data) => {
  const response = await fetch("https://your-backend.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.ok;
};
```

## 📱 Database Options

If you want to store form data:

- **Firebase**: Easy setup, free tier
- **Supabase**: PostgreSQL with real-time features
- **MongoDB Atlas**: Free tier available
- **PlanetScale**: MySQL database
- **Airtable**: Spreadsheet-like database

## 🔐 Security Considerations

1. **Validate all inputs** on both client and server
2. **Use HTTPS** for all form submissions
3. **Implement rate limiting** to prevent spam
4. **Sanitize data** before storing/emailing
5. **Use environment variables** for sensitive data

## 📧 Email Templates

Create professional email templates:

```html
<!-- Contact Form Email Template -->
<h1>New Contact Form Submission</h1>
<p><strong>From:</strong> {{firstName}} {{lastName}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr />
<p><em>Submitted on {{date}}</em></p>
```

## 🚀 Quick Start Recommendation

**For immediate deployment:**

1. **Use EmailJS** - fastest setup
2. **Deploy to Netlify** - automatic GitHub integration
3. **Use Netlify Forms** - built-in form handling

**For production:**

1. **Custom backend** with proper database
2. **Email service** (SendGrid, Mailgun, etc.)
3. **Proper security** and validation

## 📞 Support

Need help with integration? The form service is already set up - just choose your preferred method and update the service functions!

---

**Current Status**: Forms work perfectly for demo purposes. Choose your integration method and follow the steps above! 🎉
