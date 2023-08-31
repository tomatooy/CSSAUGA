import React,{useState} from 'react'
import Banners from "../components/Admin/ManageBanner"
import Gallery from "../components/Admin/ManageGallery"
import JoinForm from '../components/Admin/ManageJoinForm'
import Posts from "../components/Admin/ManagePosts"

export default function AdminMain() {
    const [pageType, setPageType] = useState("a")

    const WrapperStyle  = {
        "display":"flex",
        "width" : "50%",
        "justify-content" : "space-around",
        "margin" : "20px auto"
    }

    
    return (
        <div>
            <div style={WrapperStyle}>
            <Banners onClickFunction={() =>{setPageType("Banner")}}/>
            <Gallery onClickFunction={() =>{setPageType("Gallery")}}/>
            <JoinForm onClickFunction={() =>{setPageType("Form")}}/>
            <Posts onClickFunction={() =>{setPageType("Banner")}}/>
            </div>
            
        </div>
    )
}
