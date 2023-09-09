import React,{useState,useEffect} from 'react'
import "./switch.css"
import i18n from '../../i18n';

export default function LngSwitch() {
    
    const[lang,setLang] = useState('cn')
    useEffect(() => {
        changeLanguage(lang)
    }, [lang])
    return (
        <label class="toggle-switch" for="language-toggle">
        <span class="label-cn" style={lang==='cn'?{"background-color":"#ba0c2f"}:{}}>中文</span>
        <input type="checkbox" id="language-toggle" onChange={hanldeOnChange}/>
        <span class="slider"></span>
        <span class="label-en" style={lang==='en'?{"background-color":"#ba0c2f"}:{}}>EN</span>
      </label>
    )

    function changeLanguage (lng) {
        i18n.changeLanguage(lng);
    }
    function hanldeOnChange(e){
        const lang = e.target.checked ? 'en':'cn'
        setLang(lang)
    }

}
