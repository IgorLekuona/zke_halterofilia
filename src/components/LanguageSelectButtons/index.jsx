import React, { useContext } from 'react';

import './style.css';
import { I18nContext } from '../../i18n';

const LanguageSelectButtons = props => {
  
  /* Another hook here: useContext will receive a Context
  and return anything provided in the Provider */
  const { langCode, dispatch } = useContext(I18nContext);

  /* We will dispatch an action to set the language with the
  value of <select /> component. This will also change the 
  translate method in the context to translate keys into 
  the language we select */
  const onLanguageSelect = e =>
    dispatch({ type: "setLanguage", payload: e.target.value });
  
  const renderOption = (code, imgsty) => (
    <button type="button" className={imgsty} value={code} defaultValue={code === langCode} onClick={onLanguageSelect}>
    </button>
    // <option value={code} defaultValue={code === langCode}>
    //   {code}
    // </option>
  );
  
  return (
    <div className="btn-group">
      {renderOption("eus", "btn-circle btnEus")}
      {renderOption("cas", "btn-circle btnCas")}
      {renderOption("eng", "btn-circle btnEng")}
    </div>
    // <select onChange={onLanguageSelect}>
    //   {renderOption("eus")}
    //   {renderOption("cas")}
    //   {renderOption("eng")}
    // </select>

  );
};

export default LanguageSelectButtons;