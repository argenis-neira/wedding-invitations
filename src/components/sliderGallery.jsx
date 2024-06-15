import "./swiper.css";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";

const SliderGallery = () => {
  useEffect(() => {
    // Cargar el script desde el CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js";
    script.onload = () => {
      // Código que deseas ejecutar una vez que el script se ha cargado
      let mainSliderSelector = ".main-slider",
        navSliderSelector = ".nav-slider",
        interleaveOffset = 0.5;

      // Main Slider
      let mainSliderOptions = {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 3000,
        },
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          init: function () {
            this.autoplay.stop();
          },
          imagesReady: function () {
            this.el.classList.remove("loading");
            this.autoplay.start();
          },
          slideChangeTransitionEnd: function () {
            let swiper = this,
              captions = swiper.el.querySelectorAll(".caption");
            for (let i = 0; i < captions.length; ++i) {
              captions[i].classList.remove("show");
            }
            swiper.slides[swiper.activeIndex]
              .querySelector(".caption")
              .classList.add("show");
          },
          progress: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;

              swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                "translateX(" + innerTranslate + "px)";
            }
          },
          touchStart: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = "";
            }
          },
          setTransition: function (speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = speed + "ms";
              swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                speed + "ms";
            }
          },
        },
      };
      let mainSlider = new window.Swiper(mainSliderSelector, mainSliderOptions);

      // Navigation Slider
      let navSliderOptions = {
        loop: true,
        loopAdditionalSlides: 10,
        speed: 1000,
        spaceBetween: 5,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: "vertical",
        on: {
          imagesReady: function () {
            this.el.classList.remove("loading");
          },
          click: function () {
            mainSlider.autoplay.stop();
          },
        },
      };
      let navSlider = new window.Swiper(navSliderSelector, navSliderOptions);

      // Matching sliders
      mainSlider.controller.control = navSlider;
      navSlider.controller.control = mainSlider;
    };
    document.body.appendChild(script);

    // Limpieza para eliminar el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Row>
      <div className="swiper-container main-slider loading">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Shaun Matthews</p>
              <span className="caption">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: "url(images/1.jpg)",
              }}
            >
              <img alt="test" src="images/1.jpg" className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Alexis Berry</p>
              <span className="caption">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Billie Pierce</p>
              <span className="caption">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Trevor Copeland</p>
              <span className="caption">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Bernadette Newman</p>
              <span className="caption">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>
      <div className="swiper-container nav-slider loading">
        <div className="swiper-wrapper" role="navigation">
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Shaun Matthews</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: "url(images/1.jpg)",
              }}
            >
              <img alt="test" src="images/1.jpg" className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Alexis Berry</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Billie Pierce</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Trevor Copeland</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85)",
              }}
            >
              <img
                alt="test"
                src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85"
                className="entity-img"
              />
            </figure>
            <div className="content">
              <p className="title">Bernadette Newman</p>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default SliderGallery;
