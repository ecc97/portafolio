import Navbar from "../Navbar";
import styles from '../Header/header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
        </header>
    );
}
