import React, { Fragment } from 'react';

import { I18nContext } from '../i18n';

import '../App.css';
import "./style.css";

import misioa_png from '../images/misioa.png';
import halt_h from '../images/halterofilia_header.png';
import { MapElement } from '../components/MapElement';

const About = () => {

    const {langCode, translate} = React.useContext(I18nContext);

    return (
        <Fragment>
            <div className="under-container">
                <h1 className='font-face-bago'>{translate('guri buruz')}</h1>
                <hr/>
                <img src={halt_h} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%", height: "auto"}} alt="banner"/>
                <br/><br/>
                <div>
                    <p>
                        {translate('gb1')}
                    </p>
                    <p>
                        {translate('gb2')}
                    </p>
                    <p>
                        {translate('gb3')}
                    </p>
                </div>
                <br/>
                { langCode === "eus" && 
                    <>
                        <div>
                                <h4 className='font-face-bago'> {translate('gb4')}</h4>
                                <br />
                                <img src={misioa_png} alt="Misioaren diagrama" style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%", height: "auto"}}></img>
                        </div>
                        <br/><br/><br/>
                    </>
                }
                <div>
                    <h4 className='font-face-bago'>
                        {translate('gb5')}
                    </h4><br/>
                    <p>
                        {translate('gb6')}
                    </p>
                    <br/>
                    <MapElement />
                </div><br/><br/><br/>
            </div>
        </Fragment>
    );

}

export default About;