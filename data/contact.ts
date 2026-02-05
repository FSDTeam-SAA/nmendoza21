export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  icon: "briefcase" | "mail" | "map";
}

export interface ContactPageData {
  title: string;
  subtitle: string;
  info: ContactInfoItem[];
}

export const contactPageData: ContactPageData = {
  title: "Get in Touch",
  subtitle: "World class experts leading the charge in biotechnology",
  info: [
    {
      id: "careers",
      label: "Careers",
      value: "recruiting@vivtex.com",
      icon: "briefcase",
    },
    {
      id: "general",
      label: "General",
      value: "info@vivtex.com",
      icon: "mail",
    },
    {
      id: "address",
      label: "",
      value:
        "135 William T Morrissey Blvd, Suite P101, Boston, MA 02125 | Wägistrasse 13, 8952 Schlieren, Switzerland",
      icon: "map",
    },
  ],
};
