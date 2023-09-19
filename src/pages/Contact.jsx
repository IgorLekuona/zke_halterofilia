import React, { Fragment } from 'react';

import { I18nContext } from '../i18n';
import '../App.css';
import "./style.css";

import { CompContacts } from '../components/CompContacts';

const Contact = () => {

    const {translate} = React.useContext(I18nContext);

    return (
        <Fragment>
            <div className="under-container font-face-bago">
                <h1>{translate('kontaktatu')}</h1>
                <hr/>
                <CompContacts />
            </div>
        </Fragment>
    );
}

export default Contact;