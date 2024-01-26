import { Link} from 'react-router-dom';


function Bad_rsns() {
    
    return (
        <div>
            <div className='top_div'>
                <button className='top_button'><Link to="/Reasons" >Razones</Link></button>
                <button className='top_button'><Link to="/" >Mensaje</Link></button>
            </div>

            <div className='error'>
                <h1>Error 505: there isn't any bad reason.</h1>
            </div>

        </div>
    )
}

export default Bad_rsns;