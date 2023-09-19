import React, {Fragment} from 'react';

import { I18nContext } from '../i18n';
import '../App.css';
import "./style.css";

import arg_goiz from '../images/Argazkia-goizez-02050.jpg';
import halt_herri from '../images/HalterofiliaHerrikirolekin.jpg';
import serje_reding from '../images/serje_reding.jpg';
import CLXXX_kg from '../images/180kg.jpg';
import aurkezpen from '../images/aurkezpen.jpg';
import kartela from '../images/kartela.jpg';

const ZarautzSaria = () => {

    const {translate} = React.useContext(I18nContext);

    return (
        <Fragment>
            <div className="under-container">
                <h1 className='font-face-bago'>{translate('zarautz saria')}</h1>
                <hr/>
                <br/>
                <p>
                    {translate('zs1')}
                </p>
                <img src={arg_goiz} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "80%", height: "auto"}} alt="" /><br/>
                <p>
                    {translate('zs2')}
                </p>
                <img src={halt_herri} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "80%", height: "auto"}} alt="" /><br/><br/><br/>
                <h4 className='font-face-bago'>
                    {translate('zs3')}
                </h4><br/>
                <p>
                    {translate('zs4')}
                </p><br/>
                <img src={serje_reding} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "40%", height: "auto"}} alt="Serje Reding" /><br/><br/>
                <p>
                    {translate('zs5')}
                </p><br/>
                <img src={CLXXX_kg} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "80%", height: "auto"}} alt="" /><br/><br/>
                <p>
                    {translate('zs6')}
                </p><br/>
                <img src={aurkezpen} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "80%", height: "auto"}} alt="" /><br/><br/>
                <h5 style={{textAlign:"center"}}>
                    {translate('zs7')}
                </h5><br/>
                <img src={kartela} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "60%", height: "auto"}} alt="" /><br/><br/><br/>
            </div>
        </Fragment>
    );

}

export default ZarautzSaria;