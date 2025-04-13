import Link from "next/link";
import styles from "./Header.module.css";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/">WATCHIT</Link>
        <Link className={styles.setting} href="/settings">
          설정
        </Link>
      </Container>
    </header>
  );
}
