import React from "react"
import  "./obraz.css"

/**
*******************************************************

nazwa funkcji:  <zwracania wartości do funkcji mapy>

    parametry wejściowe:  Zdjęcie,Nazwa Zdjęcia, Opis zdjęcia, oraz Cena zdjęcia, - Zdjęcie, stringi

    wartość zwracana:     Zwraca blok, z wartościami opisanymi

    informacje:           Zwraca do App.js

    autor:                <Miłosz Todys>

    ****************************************************/


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