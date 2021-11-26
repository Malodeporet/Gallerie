import React from 'react';
import './acceuil.css';
import Isa from '../../assets/isa.jpeg';

const Acceuil = () => {
    return (
        <div className="container">

            <div className="presentation">
                <p>Je m'apelle Isabelle Paré, dentellière du point d'Alençon.
                    Je vous propose aujourd'hui de découvrir mes oeuvres à travers mon site.
                </p>
                <p>Mes réalisations sont découpée en 3 catégorie :</p>
                <p>La dentelle, les dessins de dentelle et les tableaux.
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="header-picture">
                <img
                    className="picture"
                    src={Isa}
                    alt="Isabelle"
                /></div>
        </div>
    );
};

export default Acceuil;