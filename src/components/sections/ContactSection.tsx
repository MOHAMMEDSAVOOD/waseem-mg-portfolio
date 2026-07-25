import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, MessageSquare } from 'lucide-react';
import { BRAND } from '../../data/brandData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Strategic Business Partnership',
    budget: '₹25L - ₹1Cr',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              EXECUTIVE CONTACT HQ
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Initiate Strategic <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Dialogue.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct portal for institutional investors, real estate developers, media inquiries, keynote bookings, and strategic joint ventures under Essotto Private Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold block">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="font-heading font-bold text-xl text-white">
                  Essotto Private Limited
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Bengaluru HQ Address</span>
                    <span className="text-slate-400">{BRAND.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Executive Desk</span>
                    <a href={`mailto:${BRAND.contact.email}`} className="text-red-400 hover:underline">
                      {BRAND.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Corporate Line</span>
                    <span className="text-slate-400">{BRAND.contact.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <span className="text-[10px] font-mono-tag text-slate-400 uppercase block">
                  RESPONSE PROTOCOL
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Submissions are triaged directly by the founder's executive office. You will receive a response within 24 business hours.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-3 text-xs">
              <span className="font-mono-tag text-red-500 uppercase font-bold block">
                DIRECT INQUIRY DESKS
              </span>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div className="p-2 rounded bg-black/40 border border-white/5">• Real Estate Advisory</div>
                <div className="p-2 rounded bg-black/40 border border-white/5">• Keynotes & Speaking</div>
                <div className="p-2 rounded bg-black/40 border border-white/5">• Media Interviews</div>
                <div className="p-2 rounded bg-black/40 border border-white/5">• AI Labs Investment</div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-xl bg-[#0e0e0e] border border-white/10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-heading font-bold text-2xl text-white">Inquiry Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your inquiry has been routed to the executive office of Mohammed Waseem MG.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded bg-red-600 text-white font-mono-tag text-xs tracking-wider"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Executive Inquiry Form
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono-tag text-slate-400 uppercase block">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono-tag text-slate-400 uppercase block">
                      BUSINESS EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono-tag text-slate-400 uppercase block">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono-tag text-slate-400 uppercase block">
                      INQUIRY CATEGORY *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-red-600"
                    >
                      <option>Strategic Business Partnership</option>
                      <option>Top Selling Property Mandate</option>
                      <option>Keynote / Panel Booking</option>
                      <option>Essotto AI Labs Investment</option>
                      <option>Press & Media Interview</option>
                      <option>Other Executive Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono-tag text-slate-400 uppercase block">
                    PROJECT / TRANSACTION BUDGET
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-red-600"
                  >
                    <option>Below ₹25 Lakhs</option>
                    <option>₹25 Lakhs - ₹1 Crore</option>
                    <option>₹1 Crore - ₹10 Crores</option>
                    <option>₹10 Crores+</option>
                    <option>Institutional Mandate / N/A</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono-tag text-slate-400 uppercase block">
                    MESSAGE / SCOPE OVERVIEW *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide context regarding your proposal or mandate requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-red-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono-tag text-xs font-bold tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-950/50"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT EXECUTIVE INQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
