import Link from 'next/link';
import styles from './layout.module.css';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">women</Link>
        <Link href="/products/men">men</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
