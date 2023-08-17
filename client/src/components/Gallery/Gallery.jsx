import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React,{useEffect,useState}from "react";
import axios from "axios"
import {formatGoogleDriveImageUrl} from '../../api/api'
export default function GalleryPage() {
    //const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
    const [index, setIndex] = React.useState(-1)
    const [photosData, setPhotos] = useState()
    useEffect(()=>{
        fetch()
        console.log(photosData)
    },[])
    const images = [
        {
            src:
                "https://images.unsplash.com/photo-1577279549270-b9e297533cdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
            width: 2090,
            height: 1500

        },
        {
            src:
                "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            width: 1080,
            height: 800

        },
        {
            src:
                "https://images.unsplash.com/photo-1577278689329-1914b6814d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1140&q=80",
            width: 1080,
            height: 800

        },
        {
            src:
                "https://images.unsplash.com/photo-1577177205947-4078546be974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
            width: 1080,
            height: 800

        },
        {
            src:
                "https://images.unsplash.com/photo-1437326300822-01d8f13c024f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            width: 1080,
            height: 800

        },
        {
            src:
                "https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            width: 1080,
            height: 800

        },
        {
            src:
                "https://images.unsplash.com/photo-1521859727374-9b8e0ef8c0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            width: 1080,
            height: 800

        },
        {
            src: "https://images.unsplash.com/photo-1577201404214-b725e3212fc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
            width: 1080,
            height: 800

        }
    ];
 
    return (
        <div className="App">
            <PhotoAlbum
                layout="rows"
                photos={photosData}
                targetRowHeight={150}
                onClick={({ index: current }) => {
                    setIndex(current)}}
            />

            <Lightbox
                index={index}
                slides={photosData}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    );

    async function fetch(){
        try{
            const {data} =await axios.get("http://localhost:5001/photo/get")
            data.map(eachData => {
                if (eachData && eachData.url) {
                    eachData.src = formatGoogleDriveImageUrl(eachData.url); // Rename 'url' to 'src'
                    const newheight = eachData.width *2;
                    eachData.height = newheight
                    eachData.width = 
                    delete data.url; // Remove the 'url' property
                  } else {
                    console.log("Invalid or missing data.");
                  }
            })
            
            setPhotos(data)
        }
        catch(err){
            console.log(err.message)
        }
    }
}
