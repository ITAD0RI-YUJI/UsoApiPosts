import './styles/main/btn_plus/btn-plus.css'

function BtnPLus(){
    return(
        <>
            <div className="btn-plus" title="Crear">
                <svg  xmlns="http://www.w3.org/2000/svg" width="1.375rem"  height="1.375rem"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                <p className="btn-plus_p">Opinar</p>
            </div>
        </>
    )
}

export default BtnPLus