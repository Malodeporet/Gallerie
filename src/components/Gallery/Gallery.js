import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from '../Carousel/Carousel';

// Dentelle
import Img1 from '../../assets/dentelle/img1.jpeg';
import Img2 from '../../assets/dentelle/img2.jpeg';

// Dessin de dentelle
import Img3 from '../../assets/dessin-dentelle/img3.jpeg';
import Img4 from '../../assets/dessin-dentelle/img4.jpeg';
import Img5 from '../../assets/dessin-dentelle/img5.jpeg';
import Img6 from '../../assets/dessin-dentelle/img6.jpeg';
import Img7 from '../../assets/dessin-dentelle/img7.jpeg';

// Dessin crayon de couleur
import Img8 from '../../assets/crayon-de-couleur/img8.jpeg';
import Img9 from '../../assets/crayon-de-couleur/img9.jpeg';
import Img10 from '../../assets/crayon-de-couleur/img10.jpeg';
import Img11 from '../../assets/crayon-de-couleur/img11.jpeg';
import Img12 from '../../assets/crayon-de-couleur/img12.jpeg';
import Img13 from '../../assets/crayon-de-couleur/img13.jpeg';
import Img14 from '../../assets/crayon-de-couleur/img14.jpeg';
import Img15 from '../../assets/crayon-de-couleur/img15.jpeg';
import Img16 from '../../assets/crayon-de-couleur/img16.jpeg';
import Img17 from '../../assets/crayon-de-couleur/img17.jpeg';
import Img18 from '../../assets/crayon-de-couleur/img18.jpeg';
import Img19 from '../../assets/crayon-de-couleur/img19.jpeg';
import Img20 from '../../assets/crayon-de-couleur/img20.jpeg';
import Img21 from '../../assets/crayon-de-couleur/img21.jpeg';
import Img22 from '../../assets/crayon-de-couleur/img22.jpeg';


const Gallery = () => {
    let dataDentelle = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },]

    let dataDessin = [
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },]

    let dataCrayonDeCouleur = [
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
        {
            id: 22,
            imgSrc: Img22,
        },

    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <div>
            <h2 className="gallery-title">Gallerie</h2>
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

            <div class="division-title">
                <h3>Dessin de Dentelle</h3>
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

            <div class="division-title">
                <h3>Crayon de Couleur</h3>
            </div>
            <Carousel />
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
