import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import imgCompassLog from './img/imgNavbar/imgCompassLog.png';
import imgCompassLogOut from './img/imgNavbar/imgCompassLogOut.png';



function Likes(props) {

    const Likes = props.likes

    const [{ cities }, dispatch] = useStateValue()
    const [{ user }] = useStateValue()

    const [itineraries, setItineraries] = useState([])

    const { id } = useParams()
    const citiesSelecter = cities.filter(city => city._id === id)

    useEffect(() => {
        citiesSelecter.map(city =>
            axios.get(`https://myitinerary-claudiodmguzman.herokuapp.com/api/itinerarios/${city.name}`)
                .then(response => setItineraries(response.data.response.itinerario)
                )
        )
    }, [])

    // const [{ user }, dispatch] = useStateValue()

    const [likes, setLikes] = useState()

    const likeDisLike = async () => {
        const token = localStorage.getItem("token")
        console.log(user)
        console.log(props)
        await axios.put(`https://myitinerary-claudiodmguzman.herokuapp.com/api/likeDisLike/${Likes}`, {}, {
            headers: {
                'Authorization': 'Bearer ' + token // método de autorizacion estandar para autoriza y autentificar al usuario
            }
        })
            // .then(response => console.log(response))
            .then(response => setLikes(response.data.response.length))
    }



    return (

        <>
    {user?
            <div className='accessLikes'>

                <button className="paccessLikesRojo" onClick={likeDisLike}>❤ {likes}</button>

            </div>
            :

            <div className='accessLikes'>

                <button className="paccessLikesRojo">❤ {likes}</button>

            </div>
            }

        </>
    )
}

export default Likes;