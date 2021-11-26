import React, {useState} from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../../assets/img1.jpeg';
import Img2 from '../../assets/img2.jpeg';
import Img3 from '../../assets/img3.jpeg';
import Img4 from '../../assets/img4.jpeg';
import Img5 from '../../assets/img5.jpeg';
import Img6 from '../../assets/img6.jpeg';
import Img7 from '../../assets/img7.jpeg';
import Img8 from '../../assets/img8.jpeg';
import Img9 from '../../assets/img9.jpeg';
import Img10 from '../../assets/img10.jpeg';
import Img11 from '../../assets/img11.jpeg';
import Img12 from '../../assets/img12.jpeg';
import Img13 from '../../assets/img13.jpeg';
import Img14 from '../../assets/img14.jpeg';
import Img15 from '../../assets/img15.jpeg';
import Img16 from '../../assets/img16.jpeg';
import Img17 from '../../assets/img17.jpeg';
import Img18 from '../../assets/img18.jpeg';
import Img19 from '../../assets/img19.jpeg';
import Img20 from '../../assets/img20.jpeg';
import Img21 from '../../assets/img21.jpeg';
import Img22 from '../../assets/img22.jpeg';


const Gallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
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
        },
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
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <h2 className="gallery-title">Gallerie</h2>
        <h3 className="division-title">Dentelle</h3>
        <div class={model? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)}/>
        </div>
        <div className="gallery">
        
            {data.map((item, index) => {
                return (
                    
                    <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery
