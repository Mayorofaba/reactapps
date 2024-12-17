import { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
    const [Loading, setLoading] = useState(false);
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)


    async function fetchProducts() {

        try {
            setLoading(true)

            const response = await fetch(

                `https://dummyjson.com/products?limit=10&
                skip=${count === 0 ? 0 : count * 20
                }`);

            const result = await response.json();

            if (result && result.products && result.products.length) {

                setProduct((prevData) => [...prevData, ...result.products])
                setLoading(false)
                console.log(result.products)

            }


        } catch (error) {

            console.log(error)
            setLoading(false)

        }


    }




    useEffect(() => {

        fetchProducts()

    }, [count]);

    useEffect(() => {
        if (product && product.length === 100)

            setDisableButton(true)



    }, [product])



    if (Loading) {

        return <div>loading data, please wait.....</div>
    }






    return (

        <div className="container">
            <div className="products-container">


                {


                    product && product.length ?
                        product.map((item) =>

                        (

                            <div className="products" key={item.id}>


                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>

                        ))


                        : null
                }



            </div>



            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)} >Load More Products</button>

                {
                    disableButton ? <p>you have reached 100 products</p> : null
                }

            </div>

        </div>
    )
}

export default LoadMoreData;