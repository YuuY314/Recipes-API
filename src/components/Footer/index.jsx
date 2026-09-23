import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer(){
    return (
        <footer className={styles.footer}>
          <div>
            <Link href="/"><h1>Recipes</h1></Link>
          </div>
          <p>Recipes © 2026</p>
          <div>
            <Link href="https://github.com/YuuY314" target="_blank"><h3>Github</h3></Link>
          </div>
        </footer>
    )
}