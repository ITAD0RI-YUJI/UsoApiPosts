import { useState } from 'react'
import Login from './login.jsx'
import Principal from './principal.jsx'

// import './principal.html'

function App() {

  const [auth , setAuth] = useState(false);

  return (
    <>
      {/* <Principal /> */}
      
      {auth ? <Principal /> : <Login auth={setAuth} />}
    </>
  )
}

export default App
