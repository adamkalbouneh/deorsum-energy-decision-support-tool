import React from 'react'
import { useState } from 'react'

export default function TargetModify({ title, value:initialValue, name, key, index, modificationFunction }){
    let prefix = ""
    let postfix = ""

    switch(name) {
        case "energy":
            postfix = " kWh"
            break;
        case "cost":
            prefix = "£"
            break
        case "carbon":
            postfix = " tCO₂e"
            break
    }

    const [value, setValue] = useState(initialValue)

    return (
        <>
            <div className="flex flex-col mb-12">
                <label for={ "target-input-" + key }>{ title }</label>
                <div className="flex flex-row items-center">
                    <h2 className="text-7xl inline">{ prefix }</h2>
                    <input type="text" className="text-7xl inline w-40 border-4 px-2" id={ "target-input-" + key } value={ value } onChange={ (e) => {setValue(e.target.value)
                    modificationFunction(index, value) } }></input>
                    <h2 className="text-7xl inline">{ postfix }</h2>
                </div>
            </div>
        </>
    )
}