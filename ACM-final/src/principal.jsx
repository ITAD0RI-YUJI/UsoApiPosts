import Nav from './nav.jsx'
import CenterPart from './centerPart.jsx'
import './styles/main/principal.css'
import RigthPart from './rigthPart.jsx'
import { useInfo } from './js/apiPost/apiAplication.js'
import { apiUrl } from './js/apiPost/apiAplication.js'

function Principal(){
    useInfo(apiUrl);

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