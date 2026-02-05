import type { Metadata } from "next";
import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactPageData } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Vivtex",
  description: "Get in touch with Vivtex team.",
};

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
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-500 mt-2">{subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
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

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <textarea
                placeholder="Leave us a message..."
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              />

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" id="privacy" className="rounded" />
                <label htmlFor="privacy">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <Button className="bg-primary text-white w-full py-2">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
