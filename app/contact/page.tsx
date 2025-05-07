"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message. We'll get back to you soon!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Have questions about our services? Get in touch with our team and we&apos;ll be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info Jagaban */}
      <section className="section bg-white p-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-600">Email</h3>
              <p className="text-slate-600">info@legalregscan.com</p>
              <p className="text-slate-600">support@legalregscan.com</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-600">Phone</h3>
              <p className="text-slate-600">+1 (555) 123-4567</p>
              <p className="text-slate-600">+1 (555) 765-4321</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-600 ">Location</h3>
              <p className="text-slate-600">123 Business Avenue</p>
              <p className="text-slate-600">New York, NY 10001</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-600">Hours</h3>
              <p className="text-slate-600">Monday - Friday</p>
              <p className="text-slate-600">9:00 AM - 5:00 PM ET</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-slate-50 p-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below, and our team will get back to you as soon as possible. We&apos;re here to answer any questions you may have about our services.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border text-gray-600 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border text-gray-600 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-gray-600 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-gray-700 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" variant="primary" className="w-full md:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
                
                {submitMessage && (
                  <div className="p-4 bg-emerald-50 text-emerald-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">What services does LegalRegScan offer?</h4>
                  <p className="text-slate-600">
                    We provide company ID validation, detailed compliance reports, business status checks, and other regulatory compliance services.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">How quickly can I verify my company&apos;s registration?</h4>
                  <p className="text-slate-600">
                    Our verification process is instant. Just enter your company ID, and you&apos;ll receive verification results within seconds.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Is my company information secure?</h4>
                  <p className="text-slate-600">
                    Absolutely. We implement robust security measures to protect all data. Your information is encrypted and stored securely.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Do you offer services internationally?</h4>
                  <p className="text-slate-600">
                    Yes, we provide verification services across multiple countries and jurisdictions worldwide.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">How can I get started?</h4>
                  <p className="text-slate-600">
                    Simply create an account on our platform, choose the service you need, and follow the easy step-by-step process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}