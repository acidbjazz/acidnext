import "@/styles/normalize.css";
import styles from "@/styles/rootLayout.module.sass";

import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface RootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | AcidNext",
    default: "AcidNext",
  },
  description: "Template for Next 13.4.4",
  openGraph: {
    images: "/cover.jpg",
  },
};
