// @ts-nocheck

"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Theme";

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
  // const resolvedTheme = document.getElementsByTagName("body")[0].classList[0]; ; // useTheme()
  const { theme, changeTheme } = useContext(ThemeContext);
  const [src, setSrc] = useState(darkSrc);

  useEffect(() => {
    switch (theme) {
      case "light":
        setSrc(lightSrc);
        break;
      case "dark":
        setSrc(darkSrc);
        break;
      case "system":
        if (window.matchMedia) {
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setSrc(darkSrc);
          } else {
            setSrc(lightSrc);
          }
        } else {
          setSrc(darkSrc);
        }
        break;

      default:
        setSrc(lightSrc);
        break;
    }
  }, [theme]);

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
