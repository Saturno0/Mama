import { Link} from 'react-router-dom';


function Bad_rsns() {
    
    return (
        <div>
            <div className='top_div'>
                <Link to="/Reasons" ><button className='top_button'>Razones</button></Link>
                <Link to="/" ><button className='top_button'>Mensaje</button></Link>
            </div>

            <div className='error'>
                <h1>Error 505: No se a encontrado ninguna razon.</h1>
            </div>

        </div>
    )
}

export default Bad_rsns;