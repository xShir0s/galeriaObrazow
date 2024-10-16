import logo from './logo.svg';
import './App.css';
import Obraz from './obraz.jsx'

const obraz =
[
    { grafika: "obraz1.png" , nazwa: "abstrakcja1", opis: "costam1", cena: '10000 zł'},
    { grafika: "obraz2.png" , nazwa: "abstrakcja2", opis: "costam2", cena: '10000 zł'},
    { grafika: "obraz3.png" , nazwa: "abstrakcja3", opis: "costam3", cena: '10000 zł'},
    { grafika: "obraz4.png" , nazwa: "abstrakcja4", opis: "costam4", cena: '10000 zł'},
    { grafika: "obraz5.png" , nazwa: "abstrakcja5", opis: "costam5", cena: '10000 zł'},
    { grafika: "obraz6.png" , nazwa: "abstrakcja6", opis: "costam6", cena: '10000 zł'},
    { grafika: "obraz7.png" , nazwa: "abstrakcja7", opis: "costam7", cena: '10000 zł'},
    { grafika: "obraz8.png" , nazwa: "abstrakcja8", opis: "costam8", cena: '10000 zł'}
]

/**
 *******************************************************

 nazwa funkcji:  Wypisanie obrazu

 parametry wejściowe:  source, nazwa, opis, cena
 wartość zwracana:     Zwraca blok, z wartościami opisanymi

 informacje:           Zwraca nigdzie

 autor:                Miłosz Todys

 ****************************************************/

const App = () => (
    <div className="App">

        { obraz.map(image =>
            (
                <Obraz source={image.grafika}
                       nazwa={image.nazwa}
                       opis={image.opis}
                       cena={image.cena}  />
            )
        )

        }

    </div>
)



export default App;
