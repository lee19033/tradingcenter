import React from 'react'
import Currency from "./Currency.js";
import * as ReactBootStrap from "react-bootstrap";

const CurrencyList = (props) => {
    
    let currencies=[];
    const currenciesArr = ['EUR','ILS','AUD','CAD','GBP']; 

    for (const [key, value] of Object.entries(props.currencies)) {
        if (currenciesArr.includes(key))
            currencies.push({'currency' : {key }, 'rate' : {value}}); 
    }
    
    return (
        <ReactBootStrap.Row noGutters>    
            {currencies.map(currency => {
                return (
                    <ReactBootStrap.Col>
                         <Currency key={currency.currency} value={currency} />
                    </ReactBootStrap.Col>
                )
            })
            }
        </ReactBootStrap.Row>
     )
}

export default CurrencyList; 




