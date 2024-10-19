import { Link } from 'react-router-dom/dist'

function Reasons() {
    
    return (
        <div>
            <div className='top_div'>
                <Link to="/Reasons" ><button className='top_button'>Razones</button></Link>
                <Link to="/" ><button className='top_button'>Mensaje</button></Link>
            </div>

            <div className='container'><br />
                <h2 className='text'>Para demostrarte que sos la mejor mamá que hay hice una lista con las buenas razones por lo sos y otra por las que no lo sos.</h2>

                <div className='reasons'>
                    <Link to="/Good_reasons"><button className='reason_btn'>Buenas razones</button></Link>
                    <span className='separator'></span>
                    <Link to="/Bad_reasons"><button className='reason_btn'>Malas razones</button></Link>
                </div>
                    
            </div>

        </div>
    )
}

export default Reasons;