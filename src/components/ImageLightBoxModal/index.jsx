/* eslint-disable react/prop-types */
import cls from "./styles.module.scss";
import CloseIcon from "../../assets/icons/close.svg?react";

export default function ImageLightBoxModal({image, isShowing, handleCloseModal}) {

  return (
    <div className={[cls.modalContainer, isShowing && cls.showing].join(" ")}>
      <div className={[cls.imageLightBoxModal, isShowing && cls.showing].join(" ")}>
        <div className={cls.imageLightBoxModal_header}>
          <CloseIcon onClick={() => handleCloseModal()} className={cls.closeIcon}/>
        </div>
        <img className={cls.imageLightBoxModalImage} title="Подробный просмотр" src={image} />
      </div>
      <div className={[cls.modalBackShadow, isShowing && cls.showing].join(" ")} onClick={() => handleCloseModal()}></div>
    </div>
  )
}