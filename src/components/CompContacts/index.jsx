import React, { Fragment } from 'react';

import { LogosSources } from './LogosSources';
import './style.css';

export const CompContacts = () => {

    return (
        <Fragment>
            <div className="container contact-box">
                {LogosSources.map(item => {
                    return <div className="contact-item row align-items-center" key={item.id}>
                        <div className="col-4">
                            <a href={item.link}>
                                <img src={item.image} className="contact-img img-fluid" alt="logo"/>
                            </a>
                        </div>
                        <div className="col-8 text-truncate">
                            <a href={item.link} style={{color: "#000000", textDecoration: "none"}}>
                                <h3>{  item.text  }</h3>
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </Fragment>
    )
}
