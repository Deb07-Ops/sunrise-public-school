'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full bg-white pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl text-[#2E2E2E] stardos-light mb-6 tracking-wider">
            Get in Touch
          </h1>
          <p className="text-sleek text-xl text-[#2E2E2E]/80 mb-12">
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8">
            <h2 className="text-2xl text-[#2E2E2E] stardos-light mb-6 tracking-wide">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#2E2E2E] text-sleek mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 focus:border-[#A51C30] outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#2E2E2E] text-sleek mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 focus:border-[#A51C30] outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#2E2E2E] text-sleek mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 focus:border-[#A51C30] outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#2E2E2E] text-sleek mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-200 focus:border-[#A51C30] outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#A51C30] text-white px-8 py-3 hover:bg-[#8B1728] transition-colors duration-200 text-sleek"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-[#2E2E2E] stardos-light mb-6 tracking-wide">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#2E2E2E] text-sleek font-medium mb-2">Address</h3>
                  <p className="text-[#2E2E2E]/80 text-sleek">
                    123 Education Street<br />
                    Cityville, State 12345<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="text-[#2E2E2E] text-sleek font-medium mb-2">Phone</h3>
                  <p className="text-[#2E2E2E]/80 text-sleek">
                    Main: (555) 123-4567<br />
                    Admissions: (555) 123-4568
                  </p>
                </div>
                <div>
                  <h3 className="text-[#2E2E2E] text-sleek font-medium mb-2">Email</h3>
                  <p className="text-[#2E2E2E]/80 text-sleek">
                    info@sunrisepublicschool.com<br />
                    admissions@sunrisepublicschool.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-[#2E2E2E] stardos-light mb-6 tracking-wide">
                Office Hours
              </h2>
              <div className="space-y-2">
                <p className="text-[#2E2E2E]/80 text-sleek">
                  Monday - Friday: 8:00 AM - 4:00 PM
                </p>
                <p className="text-[#2E2E2E]/80 text-sleek">
                  Saturday: 9:00 AM - 12:00 PM
                </p>
                <p className="text-[#2E2E2E]/80 text-sleek">
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl text-[#2E2E2E] stardos-light mb-4 tracking-wide">
                Visit Our Campus
              </h2>
              <p className="text-[#2E2E2E]/80 text-sleek mb-6">
                We welcome prospective students and their families to visit our campus. 
                Schedule a tour to experience our facilities and meet our faculty.
              </p>
              <button className="bg-[#A51C30] text-white px-8 py-3 hover:bg-[#8B1728] transition-colors duration-200 text-sleek">
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
