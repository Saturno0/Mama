import { Link } from 'react-router-dom/dist'

function Main_page() {


    return (
        <div>
          <div className='top_div'>
            <Link to="/Reasons" ><button className='top_button'>Razones</button></Link>
            <Link to="/" ><button className='top_button'>Mensaje</button></Link>
          </div>
    
          <div className='container'>
            <h1>Hola mami:</h1>
            <h2 className='text'>Quiero desearte un muy feliz cumple y hacerte este regalito que va a perdurar mucho mas que cualquier otra cosa material.</h2>
            <h3 className='text'>
              Este regalito lo vas a poder ver en cualquier momento de tu vida y desde donde quieras. Para que asi siempre puedas recordar el amor que te tengo y que siempre te voy a tener. 
              Para que sepas que te amo por todas las veces me ayudas inclusive cuando no la pido, por las veces que te quedas despierta hasta tarde para irme a buscar 
              cuando me junto con los chicos y nos quedamos hasta tarde y por todos los caprichos que me permitis. <br />
              Por eso y mucho mas te quiero decear un muy feliz cumpleaños para que la pases hermoso y disfrutes.
            </h3>
            <div className='main'><div className='heart'></div></div>
          </div>
        </div>
      )
}

export default Main_page;