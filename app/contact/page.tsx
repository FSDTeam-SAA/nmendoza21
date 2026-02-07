"use client";

import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactPageData } from "@/data/contact";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import ContactForm from "@/components/webside/contact/ContactForm";

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
        return <BriefcaseBusiness size={20} />;
      case "mail":
        return <Mail size={20} />;
      case "map":
        return <MapPin size={20} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="pt-16 pb-10 text-center">
        <InViewAnimationWrapper animation="slideInUp" duration={800}>
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {title}
            </h1>
            <p className="text-gray-500 mt-2">{subtitle}</p>
          </div>
        </InViewAnimationWrapper>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <InViewAnimationWrapper animation="slideInLeft" duration={800} delay={200}>
              <div>
                {info.map((item) => (
                  <div key={item.id} className="mb-8">
                    {item.label && (
                      <div className="flex items-center gap-3 text-gray-900">
                        <span className="text-cyan-600">
                          {getIcon(item.icon)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{item.label}</p>
                          <p className="text-sm text-gray-600">{item.value}</p>
                        </div>
                      </div>
                    )}
                    {!item.label && (
                      <div className="flex items-start gap-3 text-gray-600">
                        <span className="text-cyan-600 mt-0.5">
                          {getIcon(item.icon)}
                        </span>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </InViewAnimationWrapper>

           <ContactForm /> 
          </div>
        </div>
      </section>
    </main>
  );
}
