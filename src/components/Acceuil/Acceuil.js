import React from 'react';
import './acceuil.css';
import Isa from '../../assets/presentation2.jpg';
import Isa2 from '../../assets/presentation3.jpg';

const Acceuil = () => {
    return (
        <div className="container">
            <div data-aos="fade-right" data-aos-duration="2000" className="presentation">
                <p className='first-p'>Je suis <strong>dentellière</strong> du Point d'Alençon depuis 1989. Je travaille à l'Atelier National du Point d'Alençon et je réalise aussi des pièces personnelles.
                    Je vous propose aujourd'hui de découvrir mes oeuvres au travers de mon site.
                </p>
                <p className='second-p'>Mes réalisations sont réparties en 3 catégories : </p>
                <p><strong>Dentelle :</strong> J'utilise du fil de coton pour réaliser ma dentelle à l'aiguille.</p>
                <p><strong>Dessin de dentelle :</strong> Je dessine à la plume avec une encre blanche.</p>
                <p><strong>Dessin crayon de couleur :</strong> Je grave mon support que je colorie avec des crayons de couleur.</p>
            </div>

            <div data-aos="zoom-out-down" data-aos-duration="2000" className="header-picture">
                <img className="picture" src={Isa} alt="Isabelle" />
                <img className="picture2" src={Isa2} alt="Isabelle" />
            </div>
        </div >
    );
};

export default Acceuil;