import { Open_Sans, Roboto_Slab } from "next/font/google";
import Sohne from "next/font/local";

export const sans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--sans",
});

export const serif = Roboto_Slab({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--serif",
});

export const mono = Sohne({
  src: "../public/soehne-mono-web-buch.woff2",
  variable: "--mono",
});
