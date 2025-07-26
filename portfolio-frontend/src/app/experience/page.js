import styles from './Experience.module.css';

export default function Experience({ experience }) {
  if (!experience) return null;

  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.title}>Experience</h2>

      <p><strong>Company:</strong> {experience.company}</p>

      <div className={styles.description}>
        {experience.description?.map((block, i) => (
          <p key={i}>
            {block.children.map(child => child.text).join("")}
          </p>
        ))}
      </div>

      <p><strong>Role:</strong> {experience.role}</p>
      <p><strong>Duration:</strong> {experience.duration}</p>
    </section>
  );
}
