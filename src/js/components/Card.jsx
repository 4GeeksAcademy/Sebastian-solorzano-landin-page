import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardsData = [
        {
            title: "Card 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://cdn.pixabay.com/photo/2019/10/28/15/28/tajikistan-4584690_960_720.jpg",
            link: "#"
        },
        {
            title: "Card 2",
            text: "Sapiente esse necessitatibus neque.",
            image: "https://cdn.pixabay.com/photo/2020/01/05/07/22/winter-4742436_960_720.jpg",
            link: "#"
        },
        {
            title: "Card 3",
            text: "Explicabo magni sapiente, tempore debitis beatae .",
            image: "https://cdn.pixabay.com/photo/2024/06/23/06/27/lake-8847415_960_720.jpg",
            link: "#"
        },
        {
            title: "Card 4",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_960_720.jpg",
            link: "#"
        },
    ]
        


const Card = () => {

    return (

        <div className=" container contenedor py-3 bg-black text-light">
            <div className="row g-4 justify-content-center text-center">
                {CardsData.map((card, index) => (
                    <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
                        <div className="imagenes card custom-card-hover h-100">
                            <img src={card.image} className="card-img-top" alt={card.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <a href={card.link} className="btn btn-primary ">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
);
};

export default Card;