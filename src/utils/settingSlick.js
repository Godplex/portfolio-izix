import { ArrowButton } from "../components/arrowButton/ArrowButton";

export const settingSlick = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 4000,
    cssEase: "linear",
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i) {
        return <div className="dot"></div>;
    },
    prevArrow: <ArrowButton icon={"fa-solid fa-angle-left"} position="start" />,
    nextArrow: <ArrowButton icon={"fa-solid fa-angle-right"} position="end" />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};