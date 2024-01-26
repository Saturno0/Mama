import { Link } from 'react-router-dom/dist'

function Reasons() {
    
    return (
        <div>
            <div className='top_div'>
                <button className='top_button'><Link to="/" >Inicio</Link></button>
                <button className='top_button'><Link to="/" >Mensaje</Link></button>
            </div>

            <div className='container'><br />
                <h2 className='text'>Para demostrarte que sos la mejor mamá que hay hice una lista con las buenas razones por lo sos y otra por las que no lo sos.</h2>

                <div className='reasons'>
                    <button className='top_button'><Link to="/Good_reasons">Buenas razones</Link></button>
                    <span className='separator'></span>
                    <button className='top_button'><Link to="/Bad_reasons">Malas razones</Link></button>
                </div>
                    
            </div>

        </div>
    )
}

export default Reasons;