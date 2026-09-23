import Link from "next/link";
import styles from "./header.module.css";

export default function Header(){
    return (
        <header className={styles.header}>
          <nav>
            <Link href="/">
              <div className="header-logo">
                <img src="/logo.png"/>
                <h1>Recipes</h1>
              </div>
            </Link>
          </nav>
        </header>
    )
}