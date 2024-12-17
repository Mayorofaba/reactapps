import { useEffect, useState } from "react";
import "./scroll.css"


export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);



    async function fetchData(getUrl) {
        try {
            setloading(true);
            const response = await fetch(getUrl)
            const data = await response.json();


            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setloading(false)
            }

        } catch (error) {
            setloading(false)
            setErrorMsg(error.message)
        }
    }



    useEffect(() => {
        // async function fetchUrl() {
        //     await fetchData(url);
        // }
        // fetchUrl();

        fetchData(url);

    }, [url]);


    function handleScrollPercentage() {
        // console.log(
        //     document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight
        // );

        const howMuchScrolled = document.body.scrollTop ||
            document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)

        // console.log(scrollPercentage);


    }


    useEffect(() => {

        window.addEventListener("scroll", handleScrollPercentage)

        return () => {
            window.removeEventListener("scroll", () => { })

        }

    }, []);

    console.log(scrollPercentage)





    if (loading) {
        <h1> loading pls wait </h1>
    }
    if (errorMsg) {
        <h1>sorry an unexpected error occured </h1>
    }
    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" 
                    style={{ width: `${scrollPercentage}%` }}>

                    </div>
                </div>
            </div>

            <div className="data-container">
                {data && data.length > 0 ? data.map((dataItem) =>
                    <h1>{dataItem.title}</h1>) : null}
            </div>
        </div>
    )

}




// ///////////////////Another Format //////////////////////////////////////



// import { useEffect, useState } from "react";

// export default function ScrollIndicator({ url }) {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState("");

//     async function fetchData(getUrl) {
//         try {
//             setLoading(true);
//             const response = await fetch(getUrl);
//             const data = await response.json();
//             if (data && data.products && data.products.length > 0) {
//                 setData(data.products);
//                 setLoading(false);
//             }
//         } catch (error) {
//             setErrorMsg(error.message);
//         }
//     }

//     useEffect(() => {
//         async function fetchUrl() {
//             await fetchData(url);
//         }
//         fetchUrl();
//     }, [url]);

//     return (
//         <div>
//             {loading ? (
//                 <h1>Loading, please wait...</h1>
//             ) : errorMsg ? (
//                 <h1>Sorry, an unexpected error occurred</h1>
//             ) : (
//                 <>
//                     <h1>Custom Scroll Indicator</h1>
//                     <div className="data-container">
//                         {data && data.length > 0 ? (
//                             data.map((dataItem) => <h1>{dataItem.title}</h1>)
//                         ) : null}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }