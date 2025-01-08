import { Link, useParams } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { projectsData } from "../../data/projects";
import SmallArrowRightIcon from "../../assets/icons/smallArrowRight.svg?react";
import { MotionAnimate } from 'react-motion-animate';
import { globalsData } from "../../data/globals";

export default function ProjectDetail() {
  let { projectId } = useParams();
  const currentProjectData = projectsData?.find(item => item.id === projectId);

  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} ${currentProjectData?.title}`
  });

  return (
    <section>
      <div className={cls.projectDetail}>
        <MotionAnimate animation={'fade'}>
          <img title={currentProjectData?.title} className={cls.mainImage}
            src={`/images/${currentProjectData?.mainImage}`} />
        </MotionAnimate>
        <MotionAnimate animation={'fadeInUp'}>
          <h1>
            {currentProjectData?.title}
          </h1>
        </MotionAnimate>
        <MotionAnimate animation={'fade'}>
          <div className={cls.infoRow}>
            <div className={cls.infoRow_col}>
              <div className={cls.statsTable}>
                <div className={cls.statsTable_item}>
                  <span>Категория</span>
                  {currentProjectData?.stats?.category}
                </div>
                <div className={cls.statsTable_item}>
                  <span>Расположение</span>
                  {currentProjectData?.stats?.location}
                </div>
                <div className={cls.statsTable_item}>
                  <span>Год</span>
                  {currentProjectData?.stats?.year}
                </div>
                <div className={cls.statsTable_item}>
                  <span>Общая площадь</span>
                  {currentProjectData?.stats?.square}
                </div>
                <div className={cls.statsTable_item}>
                  <span>Стадия</span>
                  {currentProjectData?.stats?.stage}
                </div>
              </div>
            </div>
            <div className={cls.infoRow_col}>
              {currentProjectData?.descriptions?.map((description, index) => {
                return (
                  <p key={index}>
                    {description}
                  </p>
                )
              })}
            </div>
          </div>
        </MotionAnimate>
        <MotionAnimate animation={'fade'}>
          <div className={cls.infoRow}>
            <div className={cls.infoRow_col}>
              <div className={cls.anchorsBlock}>
                {currentProjectData?.sections?.map((sectionItem, index) => {
                  return (
                    <Link key={index} className={cls.anchorsBlock_item} to={`/#${sectionItem.id}`}>
                      <SmallArrowRightIcon className={cls.smallArrowIcon} />
                      {sectionItem.title}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className={cls.infoRow_col}>
              <img title={'Планировка'} className={cls.schemeImage} 
                src={`/images/${currentProjectData.schemeImage}`} />
            </div>
          </div>
        </MotionAnimate>
      </div>
    </section>
  )
}