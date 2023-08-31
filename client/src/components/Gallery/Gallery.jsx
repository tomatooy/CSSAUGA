import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios"
import { formatGoogleDriveImageUrl } from '../../api/api'
export default function GalleryPage() {
    //const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
    const [index, setIndex] = useState(-1)
    const [photosData, setPhotos] = useState()
    const rowHeight = window.innerWidth< 500? window.innerHeight * (1/5) : window.innerHeight*(2/5)
    useEffect(() => {
        fetch()
    }, [])
  
    return (
        
        <div className="App">
        {!photosData&&<div>Loading...</div>}
            <PhotoAlbum
                layout="rows"
                photos={photosData}
                targetRowHeight={rowHeight}
                onClick={({ index: current }) => {
                    setIndex(current)
                }}
            />

            <Lightbox
                index={index}
                slides={photosData}
                open={index >= 0}
                close={() => {
                    setIndex(-1)
                }}
            />
        </div>
    );

    async function fetch() {
        const url = process.env.REACT_APP_SERVER_URL
        try {
            const { data } = await axios.get(`${url}photo/get`)
            data.forEach(eachData => {
                if (eachData && eachData.src) {
                    eachData.src = formatGoogleDriveImageUrl(eachData.src); // Rename 'url' to 'src'
                } else {
                    console.log("Invalid or missing data.");
                }
            })
            setPhotos(data)

        }
        catch (err) {
            console.log(err.message)
        }
    }
}
