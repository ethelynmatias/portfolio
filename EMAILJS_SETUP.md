# EmailJS Setup Guide for Contact Form

## Quick Setup Steps

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/ and sign up for a free account
2. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Click on Gmail
   - Connect your Gmail account
   - Name your service (e.g., "service_ethelyn")
   - Click "Create Service"
   - Copy the Service ID

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Content:**
```
You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Set the following:
   - To Email: ethelyn.matias2017@gmail.com
   - From Name: {{from_name}}
   - Reply To: {{from_email}}

5. Click "Save"
6. Copy the Template ID (e.g., "template_contact")

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your Public Key

### 5. Update Your Code
Open `/src/components/ContactForm.jsx` and replace these values:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // Replace with your public key
```

### 6. Test Your Form
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email (ethelyn.matias2017@gmail.com)

## Free Tier Limits
- 200 emails per month
- 2 email templates
- Up to 2 attachments

## Troubleshooting

### If emails are not sending:
1. Check browser console for errors
2. Verify all IDs and keys are correct
3. Make sure your email service is active in EmailJS
4. Check spam folder

### Security Note
The public key is safe to expose in frontend code. Never expose your private key.

## Alternative: Backend Implementation

If you prefer a backend solution, here's a Node.js/Express implementation:

### Backend Setup (Optional)

1. Create `server.js` in project root:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use app-specific password
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'ethelyn.matias2017@gmail.com',
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h3>New Contact Form Message</h3>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

2. Install dependencies:
```bash
npm install express nodemailer cors dotenv
```

3. Create `.env` file:
```
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-specific-password
```

4. Update ContactForm.jsx to use backend instead of EmailJS.

## Recommended: Use EmailJS
EmailJS is simpler and doesn't require managing a backend server. It's perfect for portfolio websites!