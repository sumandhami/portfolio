import styles from "./About.module.css";

export default function About({ about }) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div>
        {about?.aboutme?.map((block, i) => (
          <p key={i} className={styles.paragraph}>
            {block.children.map((child) => child.text).join("")}
          </p>
        ))}
      </div>
    </main>
  );
}
