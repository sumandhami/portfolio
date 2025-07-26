import styles from './Report.module.css';

export default function Report({ report }) {
  if (!report) return null;

  return (
    <section className={styles.reportSection}>
      <h2 className={styles.title}>Report</h2>

      <p><strong>Title:</strong> {report.title}</p>

      <div className={styles.description}>
        {report.description?.map((block, i) => (
          <p key={i}>{block.children.map(child => child.text).join("")}</p>
        ))}
      </div>

      <p><strong>Date:</strong> {report.date}</p>

      <a
        href={`http://localhost:1337${report.file?.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        📄 View Full Report
      </a>
    </section>
  );
}
