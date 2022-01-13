import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';

const Cities = () => {
    return (
        <div className="master">
            <div className="cardMaster">
                <div className="card">
                    <div className="image">
                        <img src="./imgCity1.jpg" />
                        <div className="imageTexto">
                            <p>CITY_1</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>City<br /><span>Country</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src="./imgCity2.jpg" />
                        <div className="imageTexto">
                            <p>CITY_2</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>City<br /><span>Country</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src="./imgCity3.jpg" />
                        <div className="imageTexto">
                            <p>CITY_3</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>City<br /><span>Country</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card_master">
                <div className="card">
                    <div className="image">
                        <img src="./imgCity4.jpg" />
                        <div className="imageTexto">
                            <p>COUNTRY_1</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Country<br /><span>Continent</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src="./imgCity5.jpg" />
                        <div className="imageTexto">
                            <p>COUNTRY_2</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Country<br /><span>Continent</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src="./imgCity6.jpg" />
                        <div className="imageTexto">
                            <p>COUNTRY_3</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Country<br /><span>Continent</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities;