import React, { Component } from 'react';
import img6City from './img/imgCiudades/citiesEuropa/img6City-Republica-Checa-Praga.jpg';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
// IMPORTAR TODAS LAS IMÁGENES DE CADA UNO DE LOS PAISES

const Access = () => {
    return (


        <div className="accessContainer">

            <div className='access' >


                <div className="accessFondo">Prague</div>


                <div className="accessFondo">Czech-Republic</div>

                <div className="accessImage">
                    <img className="d-block w-100 accessImage" src={img6City} height="600" alt="img6City-Republica-Checa-Praga.jpg" />
                </div>


                <div className="accessFondo accessdet">
                    Prague is a political, cultural, and economic centre of central Europe complete with a rich history.
                </div>

                <div className="accessDetail" >
                    <Accordion title='Expand Detail'>
                        <p className='paccessDetail' >
                            Prague (/prɑːɡ/ PRAHG; Czech: Praha [ˈpraɦa] (audio speaker iconlisten); German: Prag, pronounced [pʁaːk] (audio speaker iconlisten); Latin: Praga) is the capital and largest city in the Czech Republic, the 13th largest city in the European Union and the historical capital of Bohemia. Situated on the Vltava river, Prague is home to about 1.3 million people, while its metropolitan area is estimated to have a population of 2.7 million. The city has a temperate oceanic climate, with relatively warm summers and chilly winters.

                            Prague is a political, cultural, and economic centre of central Europe complete with a rich history. Founded during the Romanesque and flourishing by the Gothic, Renaissance and Baroque eras, Prague was the capital of the Kingdom of Bohemia and the main residence of several Holy Roman Emperors, most notably of Charles IV (r. 1346–1378). It was an important city to the Habsburg Monarchy and its Austro-Hungarian Empire. The city played major roles in the Bohemian and the Protestant Reformations, the Thirty Years' War and in 20th-century history as the capital of Czechoslovakia between the World Wars and the post-war Communist era.

                            Prague is home to a number of well-known cultural attractions, many of which survived the violence and destruction of 20th-century Europe. Main attractions include Prague Castle, Charles Bridge, Old Town Square with the Prague astronomical clock, the Jewish Quarter, Petřín hill and Vyšehrad. Since 1992, the extensive historic centre of Prague has been included in the UNESCO list of World Heritage Sites.

                            The city has more than ten major museums, along with numerous theatres, galleries, cinemas, and other historical exhibits. An extensive modern public transportation system connects the city. It is home to a wide range of public and private schools, including Charles University in Prague, the oldest university in Central Europe.

                            Prague is classified as an "Alpha-" global city according to GaWC studies. In 2019, the city was ranked as 69th most liveable city in the world by Mercer. In the same year, the PICSA Index ranked the city as 13th most liveable city in the world. Its rich history makes it a popular tourist destination and as of 2017, the city receives more than 8.5 million international visitors annually. In 2017 Prague was listed as the fifth most visited European city after London, Paris, Rome, and Istanbul.
                        </p></Accordion>
                </div>

                <div className='accessCommLik' >

                    <div className="accessFondo">User comments</div>

                    <div className="accessFondo">Likes</div>

                </div>

            </div>
        </div>
    )
}

export default Access;