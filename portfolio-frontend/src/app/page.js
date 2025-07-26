import styles from './Home.module.css';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Experience from './experience/page';
import Report from './report/page';
import ContactFooter from './contact/page';



export default async function Home() {
  const res = await fetch("http://localhost:1337/api/profiles?populate=*", {
    cache: "no-store",
  });
  const data = await res.json();
  const profile = data.data[0];
 

   const aboutRes = await fetch("http://localhost:1337/api/abouts", {
    cache: "no-store",
  });
   const aboutData = await aboutRes.json();
  const about = aboutData.data[0];

  const skillsRes = await fetch("http://localhost:1337/api/skills?populate=*", {
  cache: "no-store",
});
const skillsData = await skillsRes.json();
const skill = skillsData.data[0]; // assuming you're displaying only one skill for now

const projectsRes = await fetch("http://localhost:1337/api/projects?populate=*", {
  cache: "no-store",
});
const projectsData = await projectsRes.json();
const project = projectsData.data[0]; // Just the first one for now

const experienceRes = await fetch("http://localhost:1337/api/experiences?populate=*", {
  cache: "no-store",
});
const experienceData = await experienceRes.json();
const experience = experienceData.data[0]; // We’ll show the first one


const reportRes = await fetch("http://localhost:1337/api/reports?populate=*", {
  cache: "no-store",
});
const reportData = await reportRes.json();
const report = reportData.data[0];

const contactRes = await fetch("http://localhost:1337/api/contactinfos?populate=*", {
  cache: "no-store",
});
const contactData = await contactRes.json();
const contact = contactData.data[0];



  if (!profile) {
    return <p className="text-center text-gray-500">No profile data found.</p>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {profile.photo && (
          <img
            src={`http://localhost:1337${profile.photo.url}`}
            alt="Profile Photo"
            className={styles.photo}
          />
        )}
        <div className={styles.details}>
          <h1 className={styles.title}>{profile.name}</h1>
          <div className={styles.bio}>
            {profile.bio?.map((block, i) => (
              <p key={i}>{block.children.map((child) => child.text).join("")}</p>
            ))}
          </div>
          <div className={styles.contact}>
            <p><strong>📧 Email:</strong> {profile.email}</p>
            <p><strong>📞 Phone:</strong> {profile.phone}</p>
          </div>
        </div>
      </div>

        {/* Add About section here */}
      <About about={about} />
            
      {/* Add about skills */}
      <Skills skill={skill} />

      {/* Add about project */}
      <Projects project={project} />

      {/* Add about experience */}
      <Experience experience={experience} />

      {/* Add about report */}
      <Report report={report} />

      {/* Add about contact */}
      <ContactFooter contact={contact}
       github="https://github.com/yourusername"
  linkedin="https://linkedin.com/in/yourusername"
       />


    </main>
  );
}
