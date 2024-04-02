import styles from "./page.module.css";
import Nav from "./components/Nav";
import ChatContainer from "./components/ChatContainer";
export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <ChatContainer />
    </main>
  );
}
