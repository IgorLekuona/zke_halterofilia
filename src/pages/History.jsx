import React, { Fragment, useEffect, useState } from 'react';

import { I18nContext } from '../i18n';
import '../App.css';
import "./style.css";

import halt_has from '../images/halterofilia-hasiera.png';
import emilio_micro from '../images/emilio_micro.jpg';
import emilio from '../images/emilio.jpg';
import { olazabaleus } from '../i18n/olazabal_eus';
import { olazabalcas } from '../i18n/olazabal_cas';
import { olazabaleng } from '../i18n/olazabal_eng';

const History = () => {

    const {langCode, translate} = React.useContext(I18nContext);

    function returnOlazabal(code) {
        if (code === "cas") return olazabalcas;
        else if (code === "eng") return olazabaleng;
        else return olazabaleus;
    }

    const [olazabalFile, setOlazabalFile] = useState(returnOlazabal(langCode))

    useEffect(() => {
        setOlazabalFile(returnOlazabal(langCode))
    }, [langCode]);

    return (
        <Fragment>
            <div className="under-container">
                <h1 className='font-face-bago'>{translate('historia')}</h1>
                <hr/>
                <br/>
                <p>
                    {translate('h1')}
                </p><br/>
                <img src={halt_has} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "80%", height: "auto"}} alt="" /><br/>
                <p>
                    {translate('h2')}
                </p>
                <p>
                    {translate('h3')}
                </p>
                <div className="caja_dicho">
                        {translate('h4')}
                </div><br/>
                <img src={emilio_micro} style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt=""/><br/><br/>
                <h5>
                    {translate('h5')}
                </h5><br/>
                <div>
                    {olazabalFile.map(urte =>{
                        return <div key={urte.id}>
                            <h6>{urte.id}</h6>
                            <ul>
                                {urte.ekintzak.map((ekintza, index) => {
                                    return <li key={urte.id +" - "+ index}>{ekintza}</li>
                                })}
                            </ul>
                        </ div>
                    })}
                </div><br/>
                <img src={emilio} className="img-fluid" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt=""/><br/><br/>
            </div>
        </Fragment>
    );

}

export default History;