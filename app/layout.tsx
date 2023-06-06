import "@/styles/normalize.css";
import styles from "@/styles/rootLayout.module.sass";

interface RootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <header>logo|menu</header>
          <main>{children}</main>
          <footer>©2023</footer>
        </div>
      </body>
    </html>
  );
}
