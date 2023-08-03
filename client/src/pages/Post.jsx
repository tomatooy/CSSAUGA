import React,{useState} from 'react'
import axios from 'axios'
import ReactSrcDocIframe from 'react-srcdoc-iframe';
export default function Post() {
    const [activityUrl,changeUrl] = useState('')
    let url = 'https://mp.weixin.qq.com/s/sgGqMFzxwa8oFnLC9fJ1tA'
    let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    let realurl = 'https://sever-temp.vercel.app/' + url;
    axios.get(realurl).then(res => {
        changeUrl( res.data.replace(/data-src/g,  "src" ))
    }, rej => {
        console.log(rej)
    })

    const page = <ReactSrcDocIframe srcDoc={activityUrl}/>;
    return (
        page
    )
}

