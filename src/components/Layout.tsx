import { Inter } from "next/font/google";
import NavigationBar from "./NavigationBar";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
    return (
        <>
            <NavigationBar />
            <main className={`${styles.main} ${inter.className}`}>
                {children}
            </main>
        </>
    )
}