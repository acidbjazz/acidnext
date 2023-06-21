import styles from "@/styles/header.module.sass";

import Link from "next/link";
import Menu from "@/components/menu";
import SVG from "@/components/svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <SVG name="logo" width={40} />
      </Link>
      <Menu />
    </header>
  );
}
