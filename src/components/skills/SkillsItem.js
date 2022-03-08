import Slider from 'react-slick/lib/slider';
import { ArrowButton } from '../arrowButton/ArrowButton';


export const SkillsItem = () => {

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
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-html5 fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">HTML5</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-js fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-php fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">PHP</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-node fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Node JS</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-react fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">React</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-css3 fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">CSS</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-git-alt fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Git</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-bootstrap fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-java fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Java</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-android fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">Android</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-brands fa-sass fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">SASS</p>
                    </div>
                </div>
            </div>
            <div className="px-2 d-flex align-items-strench">
                <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-solid fa-database fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5 text-nowrap">SQL</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}
