import styles from './Projects.module.css';

export default function Projects({ project }) {
  if (!project) return null;

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>
      <p><strong>Title:</strong> {project.title}</p>

      <div className={styles.description}>
        {project.description?.map((block, i) => (
          <p key={i}>
            {block.children.map(child => child.text).join("")}
          </p>
        ))}
      </div>

      <p><strong>Tech Stack:</strong> {project.techStack}</p>

      {project.githublink && (
        <a
          href={project.githublink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub Repo
        </a>
      )}

      {project.livedemo && (
        <p><strong>Live Demo:</strong> {project.livedemo}</p>
      )}

      {project.image && (
        <img
          src={`http://localhost:1337${project.image.url}`}
          alt={project.title}
          className={styles.image}
        />
      )}
    </section>
  );
}
