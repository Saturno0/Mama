import { useState } from 'react';
import { Link } from 'react-router-dom/dist'


function Good_rsns() {
    const [razones, setRazones] = useState([
    {
        id: 1,
        razon: "Porque incluso no siendo los mejores hijos, siempre nos vas a querer por mas que nos pelemos."
    },
    {
        id: 2,
        razon: "Siempre nos vas a querer."
    },
    {
        id: 3,
        razon: "Siempre nos vas a cuidar."
    },
    {
        id: 4,
        razon: "Siempre nos das lo que necesitamos y mas."
    },
    {
        id: 5,
        razon: "Siempre nos dejas salir."
    },
    {
        id: 6,
        razon: "Siempre nos vas a apoyar en las decisiones que tomemos."
    },
    {
        id: 7,
        razon: "Siempre nos siempre nos vas a ayudar en lo que necesitemos."
    },
    {
        id: 8,
        razon: "Siempre nos vas a dar los mejores consejos que nos puedas dar."
    },
    {
        id: 9,
        razon: "Siempre nos vas a tener una paciencia infinita en todo."
    },
    {
        id: 10,
        razon: "Siempre nos enzeñaste los mejores valores."
    },
    {
        id: 11,
        razon: "Siempre nos vas a celebrar todos los exitos que tengamos."
    },
    {
        id: 12,
        razon: "Siempre vas a estar con nosotros."
    },
    {
        id: 13,
        razon: "Siempre nos vas a dar comidas mas ricas que la de los restaurantes."
    }
]);
    
    return (
        <div>
            <div className='top_div'>
                <button className='top_button'><Link to="/Reasons" >Razones</Link></button>
                <button className='top_button'><Link to="/" >Mensaje</Link></button>
            </div>
            {razones.map(r => (
                <div className='container_list' key={r.id}>
                    <h2>Porque: <br /> {r.razon}</h2>
                </div>
            ))}
        </div>
    )
}

export default Good_rsns;