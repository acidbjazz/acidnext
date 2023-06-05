interface RootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header>logo|menu</header>
          <main>{children}</main>
          <footer>©2023</footer>
        </div>
      </body>
    </html>
  );
}
