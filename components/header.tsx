import styles from "@/styles/header.module.sass";
import Menu from "@/components/menu";
export default function Header() {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <Menu />
    </header>
  );
}
