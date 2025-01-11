import { Link, useParams } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { projectsData } from "../../data/projects";
import SmallArrowRightIcon from "../../assets/icons/smallArrowRight.svg?react";
import ArrowUpIcon from "../../assets/icons/arrowUp.svg?react";
import { MotionAnimate } from 'react-motion-animate';
import { globalsData } from "../../data/globals";
import ImageLightBoxModal from "../../components/ImageLightBoxModal";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  let { projectId } = useParams();
  const currentProjectData = projectsData?.find(item => item.id === projectId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageLightBoxModalShowing, setIsImageLightBoxModalShowing] = useState(false);

  const [isScrollToTopShowing, setIsScrollToTopShowing] = useState(false);

  const openImageLightBoxModal = (image) => {
    setSelectedImage(image);
    setIsImageLightBoxModalShowing(true);
    document.querySelector('header').style.zIndex = '-1';
  }

  const closeImageLightBoxModal = () => {
    setIsImageLightBoxModalShowing(false);
    document.querySelector('header').style.zIndex = '99';
  }

  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} ${currentProjectData?.title}`
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsScrollToTopShowing(true);
    } else {
      setIsScrollToTopShowing(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className={cls.projectDetail}>
        <section>
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
            <div className={[cls.infoRow, cls.topRow].join(' ')}>
              <div className={cls.infoRow_col}>
                <div className={cls.statsTable}>
                  <p>
                    <div className={cls.statsTable_item}>
                      <span>Категория</span>
                      {currentProjectData?.stats?.category}
                    </div>
                    <div className={cls.statsTable_item}>
                      <span>Год</span>
                      {currentProjectData?.stats?.year}
                    </div>
                  </p>
                  <p>
                    <div className={cls.statsTable_item}>
                      <span>Расположение</span>
                      {currentProjectData?.stats?.location}
                    </div>
                    <div className={cls.statsTable_item}>
                      <span>Общая площадь</span>
                      {currentProjectData?.stats?.square} м²
                    </div>
                  </p>
                  <p>
                    <div className={cls.statsTable_item}>
                      <span>Стадия</span>
                      {currentProjectData?.stats?.stage}
                    </div>
                  </p>
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
                  <div className={cls.anchorsBlock_mobileTitle}>
                    {currentProjectData?.title} делится на следующие функциональные зоны:
                  </div>
                  {currentProjectData?.sections?.map((sectionItem, index) => {
                    return (
                      <Link key={index} className={[cls.anchorsBlock_item, index === 0 && cls.active].join(' ')} 
                        to={`/projects/${currentProjectData?.id}/#${sectionItem.id}`}>
                        <SmallArrowRightIcon className={cls.smallArrowIcon} />
                        {sectionItem.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className={cls.infoRow_col}>
                <MotionAnimate animation={'fade'}>
                  <img title={'Планировка'} className={cls.schemeImage} 
                    src={`/images/${currentProjectData.schemeImage}`} 
                    onClick={() => openImageLightBoxModal(`/images/${currentProjectData.schemeImage}`)}/>
                </MotionAnimate>
              </div>
            </div>
          </MotionAnimate>
        </section>
        {currentProjectData?.sections?.map((sectionItem, index) => {
          return (
            <section key={index} id={sectionItem.id}>
              <MotionAnimate animation={'fade'}>
                <div className={cls.infoRow}>
                  <div className={cls.infoRow_col}>
                    <MotionAnimate animation={'fadeInUp'}>
                      <h3 className={index === 0 ? cls.topSection : ''}>{sectionItem.title}</h3>
                    </MotionAnimate>
                  </div>
                  <div className={cls.infoRow_col}>
                    <h4 className={index === 0 ? cls.topSection : ''}>{sectionItem.description}</h4>
                  </div>
                </div>
                <div className={cls.imagesTable}>
                  {sectionItem.images.map((imageItem, imageIndex) => {
                    return (
                      <div key={imageIndex} className={[cls.imagesTable_image, imageItem.isFullWidth && cls.fullWidth].join(' ')}>
                        <MotionAnimate animation={'fade'}>
                          <img title={imageItem.title} src={`/images/${imageItem.image}`} 
                            onClick={() => openImageLightBoxModal(`/images/${imageItem.image}`)} />
                        </MotionAnimate>
                      </div>
                    )
                  })}
                </div>
              </MotionAnimate>
            </section>
          )
        })}

        <div className={[cls.scrollToTopBlock, isScrollToTopShowing && cls.showing].join(' ')}>
          <div className={cls.scrollToTopBlock_button} onClick={() => scrollToTop()}>
            <ArrowUpIcon className={cls.scrollToTopIcon} />
          </div>
        </div>

        <ImageLightBoxModal isShowing={isImageLightBoxModalShowing} image={selectedImage} 
          handleCloseModal={() => closeImageLightBoxModal()} />
      </div>
  )
}