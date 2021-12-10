import React, { useState } from "react";
import toursInfo from "../tours";
import Tour from "./Tour"
import Heading from "./Heading";
import Header from "./Header"

function App() {

    const [tour, setTour] = useState(toursInfo);

    let [tours, setTours] = useState([]);

    function deleteTour(id) {
        tours = setTour(tour.filter((tourItem, index) => {
            return index !== id;
        }));
        setTours(tours);
    }

    function allToursRemoved() {
        if (tour.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    function refreshPage() {
        setTour(toursInfo)
    }

    return (
        <div>
            <main>
                {allToursRemoved() ? <Heading
                    onRefresh={refreshPage}
                /> : <Header />}
                <section>
                    {tour.map((tourItem, index) => (
                        <Tour
                            key={index}
                            id={index}
                            name={tourItem.name}
                            info={tourItem.info}
                            image={tourItem.image}
                            price={tourItem.price}
                            onDelete={deleteTour}
                        />
                    ))}
                </section>
            </main>
            <footer>
                <h3 className="footer-h3">Challenge by Coding Addict. Coded by DreamDev.</h3>
            </footer>
        </div>

    );
}


export default App;
