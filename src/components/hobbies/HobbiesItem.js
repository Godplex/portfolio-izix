import Slider from 'react-slick/lib/slider';
import { ArrowButton } from '../arrowButton/ArrowButton';

export const HobbiesItem = () => {

    var settings = {
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 3000,
        cssEase: "linear",
        dotsClass: "slick-dots slick-thumb",
        customPaging: function (i) {
            return <div className="dot"></div>;
        },
        prevArrow: <ArrowButton icon={"fa-solid fa-angle-left"} position="start" color="text-danger" />,
        nextArrow: <ArrowButton icon={"fa-solid fa-angle-right"} position="end" color="text-danger" />,
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

    return (
        <Slider {...settings}>
            <div className="px-2">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-solid fa-music fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Música</p>
                    </div>
                </div>
            </div>
            <div className="px-2">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-solid fa-tv fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Series</p>
                    </div>
                </div>
            </div>
            <div className="px-2">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-solid fa-gamepad fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Videojuegos</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}