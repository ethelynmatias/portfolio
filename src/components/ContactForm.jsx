import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  // EmailJS Configuration - You'll need to sign up at https://www.emailjs.com/
  // and get your own service ID, template ID, and public key
  const EMAILJS_SERVICE_ID = 'service_ethelyn'; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'template_contact'; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status
    setStatus({
      loading: true,
      success: false,
      error: false,
      message: ''
    });

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ethelyn.matias2017@gmail.com'
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: '✅ Message sent successfully! I\'ll get back to you soon.'
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({
            loading: false,
            success: false,
            error: false,
            message: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: '❌ Something went wrong. Please try again or email me directly.'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({
          loading: false,
          success: false,
          error: false,
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          disabled={status.loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          disabled={status.loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          disabled={status.loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          required
          disabled={status.loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status.loading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>

      {/* Status Messages */}
      {status.message && (
        <div
          className={`p-4 rounded-lg flex items-center gap-3 animate-fadeInUp ${
            status.success
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {status.success ? (
            <CheckCircle size={20} />
          ) : (
            <XCircle size={20} />
          )}
          <span>{status.message}</span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;