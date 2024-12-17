import { useState } from "react";
import MenuList from "./menuList";
import { FaMinus, FaPlus } from "react-icons/fa"


export default function MenuItem({ item }) {

    const [displayCurrentChildren, setdisplayCurrentChildren] = useState({})

    const handleToggleChilddren = (getCurrentLabel) => {

        setdisplayCurrentChildren({

            ...displayCurrentChildren,
         [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]

        })


    }



    console.log(displayCurrentChildren)

    return (

        <li>

            <div className="menu-item">


                <p>{item.label}</p>


                {
                    item && item.children && item.children.length ? <span onClick={() =>
                        handleToggleChilddren(item.label)} >
                        {
                            displayCurrentChildren[item.label] 
                            ? <FaMinus color="white" size={25} /> : <FaPlus color="white" size={25} />
                        }

                    </span> : null
                }
            </div>

            {
                item && item.children && item.children.length > 0
                    && displayCurrentChildren[item.label] ? (

                    <MenuList list={item.children} />
                ) : null
            }

        </li>
    )



}

