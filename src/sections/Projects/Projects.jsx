import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.jpg';
import freshBurger from '../../assets/fresh-burger.jpg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/mitendra9315/PG-Life"
          h3="PG-Life"
          p="Web Service App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="E-commerce"
          p="Inventory Management"
        />
      </div>
    </section>
  );
}

export default Projects;
