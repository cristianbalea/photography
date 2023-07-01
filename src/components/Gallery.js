import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./gallery.scss";

function Gallery(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function openModalHandler(index) {
    setSlideNumber(index);
    setOpenModal(true);
  }

  function closeModalHandler() {
    setOpenModal(false);
  }

  function previous() {
    slideNumber === 0
      ? setSlideNumber(props.imgGallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  }

  function next() {
    slideNumber === props.imgGallery.length - 1
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  }

  return (
    <div>
      <div className="centered-container">
        {openModal && (
          <div className="sliderWrap">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="btnClose"
              onClick={closeModalHandler}
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="btnPrev"
              onClick={previous}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={next}
            />
            <div className="fullScreenImage">
              <img src={props.imgGallery[slideNumber].img} alt="" />
            </div>
          </div>
        )}

        <div className="galleryWrap">
          {props.imgGallery &&
            props.imgGallery.map((slide, index) => {
              return (
                <div
                  className="single"
                  key={index}
                  onClick={() => openModalHandler(index)}
                >
                  <img src={slide.img} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
