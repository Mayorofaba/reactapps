import { useState } from "react"
import data from "./data"
import "./style.css"



export default function Accordion() {


    const [selected, setselected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    const [multiple, setMultiple] = useState([])


    const handleSingleSelection = (getCurrentId) => {
        setselected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultiselection = (getCurrentId) => {

        let cpyMutiple = [...multiple]

        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId)

        if (findIndexOfCurrentId === -1) { cpyMutiple.push(getCurrentId) }
        else { cpyMutiple.splice(findIndexOfCurrentId, 1) }

        setMultiple(cpyMutiple)

    }

    // console.log(multiple)




    return <div className="wrapper">

        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
            {enableMultiSelection ? "Enable Single Selection" : "Enable Multi-Selection"}
        </button>

        <div className="Accordian">


            {data.map(dataItem =>

                <div className="item">

                    <div className="title">
                        <h2>{dataItem.question}</h2>
                        <span onClick={enableMultiSelection ?
                            () => handleMultiselection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} > {selected === dataItem.id ? "-" : "+"}</span>
                    </div>

                    {
                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                            <div className="content">{dataItem.answer}</div> : null
                    }





                </div>)}
        </div>

    </div>





}