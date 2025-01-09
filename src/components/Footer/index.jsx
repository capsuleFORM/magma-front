import { Link, useParams } from "react-router-dom";
import cls from "./styles.module.scss";
import { globalsData } from "../../data/globals";
import ArrowRightIcon from "../../assets/icons/nextProjectArrow.svg?react";
import { projectsData } from "../../data/projects";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const maxMobileWindowWidth = globalsData?.maxMobileWindowWidth || 1000;
  let { projectId } = useParams();
  const [nextProjectData, setNextProjectData] = useState(null);

  const limitStringLength = (string = '') => {
    if (window.innerWidth < maxMobileWindowWidth) {
      return string.substring(0, 2);
    } else {
      return string;
    }
  }

  const getRandomDifferentProject = (currentProjectId) => {
    if (currentProjectId) {
      const filteredItems = projectsData?.filter(item => item.id !== currentProjectId); 
      if (filteredItems.length === 0) {
        return null;
      }
      const randomIndex = Math.floor(Math.random() * filteredItems.length);
      return filteredItems[randomIndex];
    }
  } 

  useEffect(() => {
    if (projectId && projectsData) {
      const nextProject = getRandomDifferentProject(projectId);
      setNextProjectData(nextProject);
    }
  }, [projectId])

  return (
    <footer className={cls.footer}>
      <div className={cls.content}>
        <div className={cls.copyrght}>
          © {currentYear} {globalsData?.copyright}
        </div>
        {!projectId ? (
          <div className={cls.socials}>
            {globalsData?.socials?.map((socialItem, index) => {
              return (
                <Link key={index} rel="nofollow" to={socialItem.link}>
                  {limitStringLength(socialItem.title)}
                </Link>
              )
            })}
          </div>
        ) : (
          <div className={cls.nextProject}>
            <span>
              Cледующий проект
            </span>
            <Link to={`/projects/${nextProjectData?.id}`} className={cls.nextProject_link}>
              {nextProjectData?.title}
              <ArrowRightIcon className={cls.arrowRightIcon} />
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}