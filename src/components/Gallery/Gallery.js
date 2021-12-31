import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CloseIcon from '@mui/icons-material/Close';
import './gallery.css';

// Dentelle
import Dt1 from '../../assets/dentelle/img1.jpg';
import Dt2 from '../../assets/dentelle/img2.jpg';
import Dt3 from '../../assets/dentelle/img3.jpg';
import Dt4 from '../../assets/dentelle/img4.jpg';
import Dt5 from '../../assets/dentelle/img5.jpg';
import Dt6 from '../../assets/dentelle/img6.jpg';

// Dessin de dentelle
import Dsn1 from '../../assets/dessin-dentelle/img1.jpg';
import Dsn2 from '../../assets/dessin-dentelle/img2.jpg';
import Dsn3 from '../../assets/dessin-dentelle/img3.jpg';
import Dsn4 from '../../assets/dessin-dentelle/img4.jpg';
import Dsn5 from '../../assets/dessin-dentelle/img5.jpg';
import Dsn6 from '../../assets/dessin-dentelle/img6.jpg';
import Dsn7 from '../../assets/dessin-dentelle/img7.jpg';
import Dsn8 from '../../assets/dessin-dentelle/img8.jpg';
import Dsn9 from '../../assets/dessin-dentelle/img9.jpg';
import Dsn10 from '../../assets/dessin-dentelle/img10.jpg';
import Dsn11 from '../../assets/dessin-dentelle/img11.jpg';
import Dsn12 from '../../assets/dessin-dentelle/img12.jpg';

// Oeuf
import Oeuf1 from '../../assets/dessin-dentelle/img13.jpg';
import Oeuf2 from '../../assets/dessin-dentelle/img14.jpg';
import Oeuf3 from '../../assets/dessin-dentelle/img15.jpg';

// Poisson
import Poisson1 from '../../assets/dessin-dentelle/img16.jpg';
import Poisson2 from '../../assets/dessin-dentelle/img17.jpg';
import Poisson3 from '../../assets/dessin-dentelle/img18.jpg';
import Poisson4 from '../../assets/dessin-dentelle/img19.jpg';

// Dessin crayon de couleur
import Cr1 from '../../assets/crayon-de-couleur/img1.jpg';
import Cr2 from '../../assets/crayon-de-couleur/img2.jpg';
import Cr3 from '../../assets/crayon-de-couleur/img3.jpg';
import Cr4 from '../../assets/crayon-de-couleur/img4.jpg';
import Cr5 from '../../assets/crayon-de-couleur/img5.jpg';
import Cr6 from '../../assets/crayon-de-couleur/img6.jpg';
import Cr7 from '../../assets/crayon-de-couleur/img7.jpg';
import Cr8 from '../../assets/crayon-de-couleur/img8.jpg';
import Cr9 from '../../assets/crayon-de-couleur/img9.jpg';
import Cr10 from '../../assets/crayon-de-couleur/img10.jpg';
import Cr11 from '../../assets/crayon-de-couleur/img11.jpg';
import Cr12 from '../../assets/crayon-de-couleur/img12.jpg';
import Cr13 from '../../assets/crayon-de-couleur/img13.jpg';
import Cr14 from '../../assets/crayon-de-couleur/img14.jpg';
import Cr15 from '../../assets/crayon-de-couleur/img15.jpg';
import Cr16 from '../../assets/crayon-de-couleur/img16.jpg';
import Cr17 from '../../assets/crayon-de-couleur/img17.jpg';
import Cr18 from '../../assets/crayon-de-couleur/img18.jpg';
import Cr19 from '../../assets/crayon-de-couleur/img19.jpg';
import Cr20 from '../../assets/crayon-de-couleur/img20.jpg';

const Gallery = () => {
    let dataDentelle = [
        {
            id: 1,
            imgSrc: Dt1,
        },
        {
            id: 2,
            imgSrc: Dt2,
        },
        {
            id: 3,
            imgSrc: Dt3,
        },
        {
            id: 4,
            imgSrc: Dt4,
        },
        {
            id: 5,
            imgSrc: Dt5,
        },
        {
            id: 6,
            imgSrc: Dt6,
        },
    ]

    let dataDessin = [
        {
            id: 7,
            imgSrc: Dsn1,
        },
        {
            id: 8,
            imgSrc: Dsn2,
        },
        {
            id: 9,
            imgSrc: Dsn3,
        },
        {
            id: 10,
            imgSrc: Dsn4,
        },
        {
            id: 11,
            imgSrc: Dsn5,
        },
        {
            id: 12,
            imgSrc: Dsn6,
        },
        {
            id: 13,
            imgSrc: Dsn7,
        },
        {
            id: 14,
            imgSrc: Dsn8,
        },
        {
            id: 15,
            imgSrc: Dsn9,
        },
        {
            id: 16,
            imgSrc: Dsn10,
        },
        {
            id: 17,
            imgSrc: Dsn11,
        },
        {
            id: 18,
            imgSrc: Dsn12,
        },
    ]

    let dataOeuf = [
        {
            id: 19,
            imgSrc: Oeuf1,
        },
        {
            id: 20,
            imgSrc: Oeuf2,
        },
        {
            id: 21,
            imgSrc: Oeuf3,
        },
    ]
    let dataPoisson = [
        {
            id: 42,
            imgSrc: Poisson1,
        },
        {
            id: 43,
            imgSrc: Poisson2,
        },
        {
            id: 44,
            imgSrc: Poisson3,
        },
        {
            id: 45,
            imgSrc: Poisson4,
        },
    ]

    let dataCrayonDeCouleur = [
        {
            id: 22,
            imgSrc: Cr1,
        },
        {
            id: 23,
            imgSrc: Cr2,
        },
        {
            id: 24,
            imgSrc: Cr3,
        },
        {
            id: 25,
            imgSrc: Cr4,
        },
        {
            id: 26,
            imgSrc: Cr5,
        },
        {
            id: 27,
            imgSrc: Cr6,
        },
        {
            id: 28,
            imgSrc: Cr7,
        },
        {
            id: 29,
            imgSrc: Cr8,
        },
        {
            id: 30,
            imgSrc: Cr9,
        },
        {
            id: 31,
            imgSrc: Cr10,
        },
        {
            id: 32,
            imgSrc: Cr11,
        },
        {
            id: 33,
            imgSrc: Cr12,
        },
        {
            id: 34,
            imgSrc: Cr13,
        },
        {
            id: 35,
            imgSrc: Cr14,
        },
        {
            id: 36,
            imgSrc: Cr15,
        },
        {
            id: 37,
            imgSrc: Cr16,
        },
        {
            id: 38,
            imgSrc: Cr17,
        },
        {
            id: 39,
            imgSrc: Cr18,
        },
        {
            id: 40,
            imgSrc: Cr19,
        },
        {
            id: 41,
            imgSrc: Cr20,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className="gallery-container" data-aos="fade-up" data-aos-duration="2000">
            <h2 className="gallery-title">Galerie</h2>
            <div class={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>

            <div class="division-title">
                <h3>Dentelle</h3>
            </div>
            <div className="gallery">
                {dataDentelle.map((item, index) => {
                    return (
                        <div class="dentelle">
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
                            </div>
                        </div>

                    )
                })}
            </div>
            <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows showArrows onClickItem>
                    <div>
                        <img src="../images/img6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../images/img7.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../images/img8.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../images/img9.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../images/img10.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
            <div class="division-title">
                <h3 data-aos="flip-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    Dessin de Dentelle
                </h3>
            </div>
            <div className="gallery">
                {dataDessin.map((item, index) => {
                    return (
                        <div class="dessin-dentelle">
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="gallery">
                {dataOeuf.map((item, index) => {
                    return (
                        <div class="dessin-oeuf">
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="gallery">
                {dataPoisson.map((item, index) => {
                    return (
                        <div class="dessin-poisson">
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="carousel-wrapper">
                <div className="first-carousel">
                    <Carousel infiniteLoop useKeyboardArrows showArrows onClickItem>
                        <div>
                            <img src="../images/img1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="../images/img2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="../images/img3.jpg" alt="" />
                        </div>
                        <div>
                            <img src="../images/img4.jpg" alt="" />
                        </div>
                        <div>
                            <img src="../images/img5.jpg" alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div class="division-title">
                <h3 data-aos="flip-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    Crayon de Couleur
                </h3>
            </div>
            <div className="gallery">
                {dataCrayonDeCouleur.map((item, index) => {
                    return (
                        <div class="crayon-de-couleur">
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery
