import Nav from './nav.jsx'
import CenterPart from './centerPart.jsx'
import './styles/main/principal.css'
import RigthPart from './rigthPart.jsx'

function Principal(){
    return(
    <>
        <main className="main">
            <Nav />
            <CenterPart />
            <RigthPart />
        </main>
    </>
)}

export default Principal