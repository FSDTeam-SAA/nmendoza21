"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  fallbackSrc?: string;
}

const CustomImage = ({
  src,
  alt,
  fallbackSrc = "/images/logo.png",
  className,
  ...props
}: CustomImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  const handleError = () => {
    if (!error) {
      setImgSrc(fallbackSrc);
      setError(true);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default CustomImage;
