import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { projectsData } from "../../data/projects";
import { MotionAnimate } from 'react-motion-animate';
import Logo from "../../assets/logo.svg?react";
import { useEffect, useState } from "react";

export default function Home() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Архитектурное бюро`
  });

  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    setTimeout(function() {
      setIsPreloaderVisible(false);
    }, globalsData.preloaderDelayMS);
  }, [])

  return (
    <section>
      <div className={cls.home}>
        <MotionAnimate animation={'fade'}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            interval={globalsData?.sliderIntervalMs}     
            isPlaying={true}
            lockOnWindowScroll={true}
            infinite={true}
            dragEnabled={false}
            totalSlides={projectsData?.filter(item => item.active === true && item.stats.year !== null).length}
          >
            <Slider className={cls.slider}>
              {projectsData?.filter(projectItem => projectItem?.mainImage && projectItem?.active === true && projectItem.stats.year !== null)
                ?.sort((a, b) => b.sliderOrder - a.sliderOrder)
                .map((projectItem, index) => {
                return (
                  <Slide key={index} index={index} className={cls.slider_slide} style={{paddingBottom: '0px'}}>
                    <Link to={`/projects/${projectItem.id}`}>
                      <img title={projectItem.title} src={`/images/projects/${projectItem.id}/${projectItem.mainImage}`} />
                    </Link>
                  </Slide>
                )
              })}
            </Slider>
            <DotGroup className={cls.sliderDots} />
          </CarouselProvider>
        </MotionAnimate>
      </div>

      <div className={[cls.pagePreloader, isPreloaderVisible && cls.visible].join(' ')}>
        <MotionAnimate animation={'fade'}>
          <Logo className={cls.pagePreloader_logo} />
        </MotionAnimate>
      </div>
    </section>
  )
}