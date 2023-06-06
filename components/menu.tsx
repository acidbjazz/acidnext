import styles from "@/styles/menu.module.sass";
import Link from "next/link";
export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="./">Home</Link>
      <Link href="./about">About</Link>
      <Link href="./blog">Blog</Link>
      <Link href="./blog/first-article">Blog - First Article</Link>
      <Link href="./contact">Contact(404)</Link>
      <Link href="./blog/no-article">Blog - No Article(404)</Link>
    </nav>
  );
}
