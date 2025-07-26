import styles from './Projects.module.css';

export default function Skills({ skill }) {
  if (!skill) return null;

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Skills</h2>
      <p><strong>Name:</strong> {skill.name}</p>
      <p><strong>Level:</strong> {skill.level}</p>
      {skill.icon && (
        <img
          src={`http://localhost:1337${skill.icon.url}`}
          alt={skill.name}
          className={styles.icon}
        />
      )}
    </section>
  );
}
