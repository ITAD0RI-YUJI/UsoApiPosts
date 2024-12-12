import './styles/main/principal.css'
import Header from './header';
import BtnPLus from './btnPlus';
import Post from './post';

function CenterPart(){
    return(
        <>
            <section className="section section--center">
                <Header />
                <BtnPLus />
                <Post />
            </section>
        </>
    )

}

export default CenterPart;