import { Fragment, useContext } from "react"

import mssg_icon from "./message_icon.svg";
import { I18nContext } from '../../i18n';
import "./style.css";

export const SignUp = () => {

    const SIGN_UP_URL = "https://zarautzke.playoffinformatica.com/preinscripcion/32/KIROLARI-FEDERATUAK-IZEN-EMATEAK-23-24/?nvf=1";
    const {translate} = useContext(I18nContext);

    const handleClick = (e) => {
        e.preventDefault();
        window.open(SIGN_UP_URL, '_blank', 'noopener,noreferrer');
    }

    return(
        <Fragment>
            <div className="sign-up">
                <button className="btn btn-light" onClick={handleClick}>
                    <img src={mssg_icon} alt="Message Icon" style={{height: "50px", background: "transparent"}} />
                </button>
                <h6>{translate('izena_eman_botoia')}</h6>
            </div>
        </Fragment>
    )
}