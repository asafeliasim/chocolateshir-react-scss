import React from 'react';
import {Carousel} from "react-bootstrap";
import singleCocao from '../../asserts/images/open-cocao.jpeg';
import singleClassic from '../../asserts/images/open-classic.jpeg';
import vanilCocao from '../../asserts/images/open-vanil-coacao.jpeg';
import package1 from '../../asserts/images/package-1.jpeg';
import package2 from '../../asserts/images/package-2.jpeg';
import package3 from '../../asserts/images/package-3.jpeg';
import butters from '../../asserts/images/peanut-butter.jpeg';
import bagCocao from '../../asserts/images/cocoa-cookie-2.jpeg';
import header from '../../asserts/images/‏‏headerBG.PNG';


const CookieGalleryList = () => {
    return (
        <div className="container">
            <Carousel >
                <Carousel.Item>
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={singleCocao}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item >
                <Carousel.Item >
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={singleClassic}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={package1}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={vanilCocao}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={package2}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={package3}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={butters}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={bagCocao}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex w-100 justify-content-center">
                        <img
                            className="d-block w-50"
                            src={header}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>


            </div>
    )
};

export default CookieGalleryList;
