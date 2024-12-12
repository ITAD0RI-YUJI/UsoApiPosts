import './styles/main/header/header.css'

function Header(){
    return(
        <>
            <header className="header">
                <div className="filter__container">
                    <div className="filter_option">
                        <p className="filter_p">Anime</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">Programción</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">Lofi</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">Noticias</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">Tecnología</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">Motos</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">HTML</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">CSS</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">JavaScript</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">React Js</p>
                    </div>
                    <div className="filter_option">
                        <p className="filter_p">Angular 19</p>
                    </div>
                    <div className="filter_option explor">
                        <p className="filter_p">Explorar</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;