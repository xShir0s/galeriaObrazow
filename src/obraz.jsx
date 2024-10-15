import React from "react"
import  "./obraz.css"

const Obraz = (props) =>

    (
        <div className="Obraz">
            <img src={props.source}></img>
            <p>
                {props.nazwa}
            </p>
            <p>
                {props.opis}
            </p>
            <p className="cena">Cena: {props.cena}</p>
        </div>
    )

export default Obraz