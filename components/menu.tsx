import styles from "@/styles/menu.module.sass";
import Link from "next/link";
export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="./">Home</Link>
      <Link href="./about">About</Link>
      <Link href="./blog">Blog</Link>
    </nav>
  );
}
