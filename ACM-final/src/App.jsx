import { useState } from 'react'
import login from './js/login.js'

import './styles/reset.css'
import './styles/login/conatainerDraw.css'
import './styles/login/container.css'
import './styles/login/containerForm.css'
import './styles/login/form.css'
import './styles/bases.css'

function App() {
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  async function handleLogin(e){
    e.preventDefault()
    const dataRes = await login(password , userName)

    console.log(dataRes)
  }

  return (
  <>
    <div className="container">
      
      <div className="container_div container_div--draw">
        <span className="strella strella_grande"/>
        <span className="strella strella_grande"/>
        <span className="strella strella_grande"/>
        <span className="strella strella_peque"/>
        <span className="strella strella_peque"/>
        <span className="strella strella_peque"/>

        <div className="moon">
          <div className="moon_mancha moon_mancha--uno">
            <span className="mancha_span mancha_span--uno"/>
          </div>
          
          <div className="moon_mancha moon_mancha--dos">
            <span className="mancha_span mancha_span--dos"/>
          </div>
        </div>

        <div className="container_name">
          <p className="name">Yō no Kami<span className="name_span"> ニカ</span></p>
        </div>
      </div>
      
        <div className="container_div container_div--form">
          <form action="" className="form" onSubmit={(e) => handleLogin(e)}>
            <fieldset className="fieldset_input">
              <label htmlFor="name">Nombre de Usuario</label>
              <input type="text" className="form_usuario" required="" autoComplete="off" onChange={(e) => setUserName(e.target.value)}/>
              <label htmlFor="password" className='label_dos'>Contraseña</label>
              <input type="password" className="form_usuario" required="" onChange={(e) => setPassword(e.target.value)}/>
            </fieldset>

            <fieldset className="fieldset_btn">
              <input type="submit" className="input_btn form_btn" value="Entrar"/>
              <input type="reset" className="input_btn form_btn" value="Borrar"/>
            </fieldset>

            <fieldset className="fieldset_links">
              <a href=".\src\principal.html" className="form_link" style={{ display: "block" }}> Recuperar contraseña </a>
              <a href="" className="form_link" style={{ display: "block" }} target="_blank"> Crear cuenta </a>
            </fieldset>
          </form>
        </div>
    </div>

    </>
  )
}

export default App
