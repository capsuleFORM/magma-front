import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { projectsData } from "../../data/projects";
import { MotionAnimate } from "react-motion-animate";
import { useEffect, useState } from "react";

export default function Projects() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Проекты`
  });

  const uniqueCategories = [...new Set(projectsData?.map(item => item.stats.category))];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isContentShowing, setIsContentShowing] = useState(true);

  const handleChangeCategory = (category) => {
    if (category !== selectedCategory) {
      setIsContentShowing(false);
      setTimeout(() => {
        setSelectedCategory(category);
        setIsContentShowing(true);
      }, 250)
    }
  };
  
  useEffect(() => {
    handleChangeCategory(uniqueCategories[0]);
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      {windowWidth > 800 ? (
        <MotionAnimate animation={'fade'}>
          <div className={cls.tabsBlock}>
            {uniqueCategories?.map((category, index) => {
              return (
                <div key={index} className={[cls.tabsBlock_item, selectedCategory === category && cls.selected].join(' ')} 
                  onClick={() => handleChangeCategory(category)}>
                  <span>
                    {category}
                  </span>
                </div>
              )
            })}
          </div>
          <div className={[cls.projects, isContentShowing && cls.showing].join(' ')}>
            {projectsData?.map((projectItem, index) => {
              if (projectItem.active && projectItem.stats.category === selectedCategory) {
                return (
                  <Link key={index} className={[cls.projectCard, !projectItem.stats.year && cls.disabled].join(' ')} 
                    to={`/projects/${projectItem.id}`}>
                    <MotionAnimate animation={'fade'}>
                      <img title={projectItem.title} src={`/images/projects/${projectItem.id}/${projectItem.smallImage}`}/>
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
      ) : (
        uniqueCategories?.map((category, categoryIndex) => {
          return (
            <MotionAnimate key={categoryIndex} animation={'fade'}>
              <h2>{category}</h2>
              <div className={[cls.projects, isContentShowing && cls.showing].join(' ')}>
                {projectsData?.map((projectItem, projectItemIndex) => {
                  if (projectItem.active && projectItem.stats.category === category) {
                    return (
                      <Link key={projectItemIndex} className={[cls.projectCard, !projectItem.stats.year && cls.disabled].join(' ')} 
                        to={`/projects/${projectItem.id}`}>
                        <MotionAnimate animation={'fade'}>
                          <img title={projectItem.title} src={`/images/projects/${projectItem.id}/${projectItem.smallImage}`}/>
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
          )
        })
      )}
    </section>
  )
}