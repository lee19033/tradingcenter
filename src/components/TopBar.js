import React, {useState, useEffect} from 'react'; 
import CurrencyList from "./CurrencyList.js";
import axios from 'axios';

const fetchURL = process.env.REACT_APP_FETCH_URL_RATES;

const TopBar = () => {

    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get(fetchURL).then(res => {
             setData(res.data.rates)
             console.log(res.data.rates);
        }) 
    }

    useEffect(() => {
        fetchData()
    }, [])     

    return (
        <CurrencyList  key = {data.usd} currencies={data ? data : ''}></CurrencyList>  
    )
}

export default TopBar;