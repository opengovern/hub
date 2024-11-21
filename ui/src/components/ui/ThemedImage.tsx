// @ts-nocheck

"use client";

const ThemedImage = ({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const resolvedTheme = "dark"; // useTheme()
  let src;

  switch (resolvedTheme) {
    case "light":
      src = lightSrc;
      break;
    case "dark":
      src = darkSrc;
      break;
    default:
      src = lightSrc;
      break;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ThemedImage;
