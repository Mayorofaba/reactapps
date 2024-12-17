


import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

import "./style.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {

    const [images, setImages] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false);



    async function fetchImages(getUrl) {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();




            if (data) {
                setImages(data)
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }

    }



    const handleNext = () => {
        setCurrentSlider(currentSlider === (images.length - 1) ? 0 : currentSlider + 1)
    }



    const handleprevious = () => {
        setCurrentSlider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)

    }



    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url]);

    console.log(images)

    if (loading) {
        return <div>Data Loading, please wait for a while</div>
    }


    if (errorMsg !== null) {
        return <div>Sorry an unexpected Error {errorMsg} occured</div>
    }


    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleprevious} />

            {

                images && images.length ? images.map((imageItem, index) => (

                    <img src={imageItem.download_url} alt={imageItem.download_url}
                        key={imageItem.id}
                        className={currentSlider === index ? "current-Img" : "current-Img hide-current-Img"}

                    />
                ))
                    : null


            }


            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
            <span className="circle-Indicator">

                {

                    images && images.length ?
                        images.map((_, index) => (

                            <button key={index} className={
                                currentSlider === index ? "current-indicator" : "current-indicator hide-current-indicator"
                            } onClick={() => setCurrentSlider(index)}></button>

                        ))

                        : null



                }


            </span>

        </div>
    );
}

export default ImageSlider;