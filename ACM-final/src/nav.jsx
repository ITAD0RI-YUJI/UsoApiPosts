import './styles/nav/nav.css'
import './styles/main/principal.css'

function Nav(){
    return(
        <>
            <section className="section section--left">
                <nav className="nav">
                    <ul>
                        <li className="list-item">
                            <a href="" className="list__link">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5rem"  height="1.5rem"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                                principal
                            </a> 
                        </li>
                        <li className="list-item">
                            <a href="" className="list__link">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5rem"  height="1.5rem"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                                me gusta 
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="" className="list__link">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5rem"  height="1.5rem"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                                guardados
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="" className="list__link">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5rem"  height="1.5rem"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
                                sign out
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="decoration-icon">
                    <svg  xmlns="http://www.w3.org/2000/svg" title="company icon" width="1.5rem"  height="1.5rem"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon_decoration icon-tabler icons-tabler-outline icon-tabler-torii"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4c5.333 1.333 10.667 1.333 16 0" /><path d="M4 8h16" /><path d="M12 5v3" /><path d="M18 4.5v15.5" /><path d="M6 4.5v15.5" /></svg>
                </div>
            </section>

        </>
    )
}

export default Nav