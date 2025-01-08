import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { projectsData } from "../../data/projects";
import { MotionAnimate } from "react-motion-animate";

export default function Projects() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Проекты`
  });

  return (
    <section>
      <MotionAnimate animation={'fade'}>
        <div className={cls.projects}>
          {projectsData?.map((projectItem, index) => {
            if (projectItem.active) {
              return (
                <Link key={index} className={[cls.projectCard, !projectItem.stats.year && cls.disabled].join(' ')} 
                  to={`/projects/${projectItem.id}`}>
                  <img title={projectItem.title} src={`/images/${projectItem.smallImage}`}/>
                  <MotionAnimate animation={'fadeInUp'}>
                    <div className={cls.projectCard_title}>
                      <span>
                        {projectItem.title}
                      </span>
                      <span>
                        {projectItem.stats.year ? projectItem.stats.year : 'SOON'}
                      </span>
                    </div>
                    <div className={cls.projectCard_subtitle}>
                      {projectItem.stats.category}
                    </div>
                  </MotionAnimate>
                </Link>
              )
            }
          })}
        </div>
      </MotionAnimate>
    </section>
  )
}