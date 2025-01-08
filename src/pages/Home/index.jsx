import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { projectsData } from "../../data/projects";
import ArrowLeftIcon from "../../assets/icons/arrowLeft.svg?react";
import ArrowRightIcon from "../../assets/icons/arrowRight.svg?react";
import { MotionAnimate } from 'react-motion-animate';

export default function Home() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Архитектурное бюро`
  });

  return (
    <section>
      <div className={cls.home}>
        <MotionAnimate animation={'fade'}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            isPlaying={true}
            infinite={true}
            totalSlides={3}
          >
            <Slider className={cls.slider}>
              {projectsData?.map((projectItem, index) => {
                if (projectItem.mainImage) {
                  return (
                    <Slide key={index} index={index} className={cls.slider_slide} style={{paddingBottom: '0px'}}>
                      <Link to={`/projects/${projectItem.id}`}>
                        <img title={projectItem.title} src={`/images/${projectItem.mainImage}`} />
                      </Link>
                    </Slide>
                  )
                }
              })}
            </Slider>
            <div className={cls.slider_controls}>
              <ButtonBack className={cls.slider_button}>
                <ArrowLeftIcon className={cls.arrowButton} />
              </ButtonBack>
              <ButtonNext className={cls.slider_button}>
                <ArrowRightIcon className={cls.arrowButton} />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </MotionAnimate>
      </div>
    </section>
  )
}