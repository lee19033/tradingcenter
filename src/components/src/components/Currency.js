import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

function Currency(props) {
    const variant = 'Dark';
    return(
            <ReactBootStrap.Card
            bg={variant.toLowerCase()}
            key={props.value.currency.key}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ maxWidth: '100Em' }}
            className="mb-1"
            >
           <ReactBootStrap.Card.Header>
           
                USD/{props.value.currency.key}&nbsp;
                {parseFloat(props.value.rate.value).toFixed(5)}
                &nbsp;
               < img
                  alt=""
                  src={`./img/${props.value.currency.key}.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-middle"
                />
            </ReactBootStrap.Card.Header>            
            </ReactBootStrap.Card>    
    )
}

export default Currency