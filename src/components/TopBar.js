import React, {useState, useEffect} from 'react'; 
import CurrencyList from "./CurrencyList.js";
import axios from 'axios';

const fetchURL = "https://api.exchangeratesapi.io/latest?base=USD";

function TopBar() {
    const [data, setData] = useState(null);

    const fetchData = () => {
        axios.get(fetchURL).then(res => {
             setData(res.data.rates)
        }) 
    }

    useEffect(() => {
        fetchData()
    }, [])    

    return (
        <CurrencyList currencies={data ? data : ''}></CurrencyList>  
    )
}

export default TopBar;