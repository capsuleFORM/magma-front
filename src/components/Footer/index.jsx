/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import cls from "./styles.module.scss";
import { globalsData } from "../../data/globals";
import ArrowRightIcon from "../../assets/icons/nextProjectArrow.svg?react";
import SmallArrowRightIcon from "../../assets/icons/smallArrowRight.svg?react";
import { projectsData } from "../../data/projects";
import { useEffect, useState } from "react";

export default function Footer({isHomePage = false}) {
  const currentYear = new Date().getFullYear();
  const maxMobileWindowWidth = globalsData?.maxMobileWindowWidth || 800;
  let { projectId } = useParams();
  const [nextProjectData, setNextProjectData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const limitStringLength = (string = '') => {
    if (windowWidth < maxMobileWindowWidth) {
      return string.substring(0, 2);
    } else {
      return string;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getNextIndex = (array, currentIndex) => {
    return (currentIndex + 1) % array.length;
  }

  const getRandomDifferentProject = (currentProjectId) => {
    if (currentProjectId) {
      const filteredItems = projectsData?.filter(item => item.stats.year !== null && item.active === true); 
      if (!filteredItems || filteredItems.length === 0) {
        return null;
      }
      const currentProjectIndex = filteredItems?.findIndex(item => item.id === currentProjectId);
      if (currentProjectIndex < 0) {
        return null;
      }
      const nextProjectIndex = getNextIndex(filteredItems, currentProjectIndex);

      return filteredItems[nextProjectIndex];
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
      <div className={[cls.content, isHomePage && cls.homePaddings, projectId && cls.projectDetailPaddings].join(' ')}>
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
              {windowWidth < maxMobileWindowWidth ? (
                <SmallArrowRightIcon className={cls.arrowRightIcon} />
              ) : (
                <ArrowRightIcon className={cls.arrowRightIcon} />
              )}
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}