import React from "react";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const Map = () => {
  return (
    <section className="w-full container mx-auto px-4 my-12 md:my-16">
      <InViewAnimationWrapper animation="fadeIn" duration={1000} delay={200}>
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.243676002022!2d-71.0519540233765!3d42.31600113788323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3714e4b51f687%3A0xff4e5bd3c6f26a60!2sVivtex!5e0!3m2!1sen!2sbd!4v1770489073863!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </InViewAnimationWrapper>
    </section>
  );
};

export default Map;
