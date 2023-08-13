import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from "react";
export default function GalleryPage() {
    const [index, setIndex] = React.useState(-1)
    const images = [
        {
            src:
                "https://images.unsplash.com/photo-1577279549270-b9e297533cdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
            width: 1080,
            height: 800

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
                photos={images}
                targetRowHeight={150}
                onClick={({ index: current }) => {
                    console.log({current})
                    setIndex(current)}}
            />

            <Lightbox
                index={index}
                slides={images}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    );
}
