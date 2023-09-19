import React, { Fragment } from 'react';

import { I18nContext } from '../i18n';
import '../App.css';
import "./style.css";
import talde_argazki from "../images/talde_argazki.jpg";
// import { CompInstagram } from '../components/CompInstagram';

const Home = () => {

    const {translate} = React.useContext(I18nContext);

    return (
        <Fragment>
            <div className="under-container">
                <div className="col-12">
                    <h1 className='font-face-bago' style={{fontSize: "3em", textAlign: "center"}}>ZKE Halterofilia</h1>
                    <hr/>
                    <h3 className='font-face-bago'>{translate('ho1')}</h3>
                    <div className="img-container">
                        <img src={talde_argazki} alt="ZKE Halterofiliako Senior Taldea" className="home-img"/>
                    </div>
                    <p className='font-face-bago'>{translate('ho2')}</p>
                </div>
                {/* <p style={{padding: "20px", textAlign: "center"}}>
                    hemen instagrameko objetua jungo zan
                </p> */}
                {/* <CompInstagram /> */}
                <br/><br/>
            </div>
        </Fragment>
    );

}

export default Home;