import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { projectsData } from "../../data/projects";
import { MotionAnimate } from "react-motion-animate";
import { useState } from "react";

export default function Projects() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Проекты`
  });

  const uniqueCategories = [...new Set(projectsData?.map(item => item.stats.category))];
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);

  return (
    <section>
      <MotionAnimate animation={'fade'}>
        <div className={cls.tabsBlock}>
          {uniqueCategories?.map((category, index) => {
            return (
              <div key={index} className={[cls.tabsBlock_item, selectedCategory === category && cls.selected].join(' ')} 
                onClick={() => setSelectedCategory(category)}>
                {category}
              </div>
            )
          })}
        </div>
        <div className={cls.projects}>
          {projectsData?.map((projectItem, index) => {
            if (projectItem.active && projectItem.stats.category === selectedCategory) {
              return (
                <Link key={index} className={[cls.projectCard, !projectItem.stats.year && cls.disabled].join(' ')} 
                  to={`/projects/${projectItem.id}`}>
                  <MotionAnimate animation={'fade'}>
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