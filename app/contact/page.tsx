"use client";

import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactPageData } from "@/data/contact";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import ContactForm from "@/components/webside/contact/ContactForm";
import Map from "@/components/webside/contact/Map";

interface FormField {
  name: string;
  placeholder: string;
  type?: string;
  isTextarea?: boolean;
}

const formFields: FormField[] = [
  { name: "firstName", placeholder: "First name" },
  { name: "lastName", placeholder: "Last name" },
  { name: "email", placeholder: "you@company.com", type: "email" },
  { name: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
  {
    name: "message",
    placeholder: "Leave us a message...",
    isTextarea: true,
  },
];

export default function ContactPage() {
  const { title, subtitle, info } = contactPageData;

  const getIcon = (iconType: "briefcase" | "mail" | "map") => {
    switch (iconType) {
      case "briefcase":
        return <BriefcaseBusiness size={24} />;
      case "mail":
        return <Mail size={24} />;
      case "map":
        return <MapPin size={24} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2] overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <InViewAnimationWrapper animation="slideInUp" duration={800}>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </InViewAnimationWrapper>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <InViewAnimationWrapper animation="slideInLeft" duration={800} delay={200}>
              <div className="space-y-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                {info.map((item, index) => (
                  <div key={item.id} className="group transition-all duration-300">
                    <InViewAnimationWrapper animation="fadeIn" duration={600} delay={300 + index * 100}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-2xl shadow-sm text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 border border-gray-100">
                          {getIcon(item.icon)}
                        </div>
                        <div className="flex-1 pt-1">
                          {item.label && (
                            <p className="text-sm font-medium text-cyan-600 uppercase tracking-wider mb-1">
                              {item.label}
                            </p>
                          )}
                          <p className="text-lg font-medium text-gray-900">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </InViewAnimationWrapper>
                  </div>
                ))}
              </div>
            </InViewAnimationWrapper>

            {/* Contact Form Wrapper */}
            <InViewAnimationWrapper animation="slideInRight" duration={800} delay={400}>
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100">
                <ContactForm />
              </div>
            </InViewAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <Map />
    </main>
  );
}
