import React, { useState } from "react";

function Tour(props) {

    const [readMore, setReadMore] = useState(false);

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <article className="single-tour-container">
            <img className="hero-image" src={props.image} alt={props.name} />
            <div className="hero-copy">
                <div className="title-price-container">
                    <h3 className="single-tour-title">{props.name}</h3>
                    <h3 className="single-tour-price">${props.price}</h3>
                </div>
                <div>
                    <p className="single-tour-description">
                        {readMore ? props.info : props.info.substring(0, 200) + "..."}
                        <button
                            onClick={() => setReadMore(!readMore)}
                            className="show-hide-btn">{readMore ? "Show Less" : "Read More"}</button>
                    </p>
                </div>
                <button onClick={handleClick} className="cta">Not Interested</button>
            </div>
        </article>
    );
}

export default Tour;

