import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap"; 
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const fetchURL = "https://metals-api.com/api/timeseries?access_key=";
const API_KEY = "txmtx7nvg27hjp4zlg4sd352roudu7tq0mlo4mlrmz6mf4ilt4uvf36voeah";
const BASE_KEY = "&base=usd"; 
const GOLD_CODE= "XAU";
const SILVER_CODE = "XAG";

function GoldChart() {
    const [Data,setData] = useState({
        gold: {},
        silver: {}, 
        lineData: {
            labels : [],
            datasets : [
                {
                    label: 'Gold-Silver Ratio',
                    data:  [],
                    borderColor: ['rgba(255,260,86,0.2)'],
                    backgroundColor: ['rgba(255,260,86,0.2)'],
                    pointBorderColor: 'rgba(255,260,86,0.2)',
                    pointBackgroundColor: 'rgba(255,260,86,0.2)'
    
                }
           ],
           options : {
               title: {
                   display: true,
                   text: 'Gold Silver Ratio'
               },
               scales: { 
                   yAxes: [
                   {
                       ticks: {
                            min: 70,
                            max: 75                     
                       }    
                   }                                               
                   ]
               },
               maintainAspectRatio : false
           }
        }
    })

    let startDate = getCurrentDate('-',5); 
    let endDate = getCurrentDate(); 
    
    const fetchData = () => {
        const goldAPI = `${fetchURL}${API_KEY}${BASE_KEY}&start_date=${startDate}&end_date=${endDate}&symbols=${GOLD_CODE}`;
        //'./json/XAU.json';
        const silverAPI = `${fetchURL}${API_KEY}${BASE_KEY}&start_date=${startDate}&end_date=${endDate}&symbols=${SILVER_CODE}`;
        //'./json/XAG.json';
        //fetch(`${fetchURL}${API_KEY}${BASE_KEY}&start_date=${startDate}&end_date=${endDate}&symbols=${SILVER_CODE}`)
        
        const getGoldRates = axios.get(goldAPI);
        const getSilverRates = axios.get(silverAPI);

        axios.all([getGoldRates, getSilverRates]).then(
                axios.spread((...allData) => {
                const allGold = allData[0].data.rates
                const allSilver = allData[1].data.rates
                const labels = []
                const data = [] 

                for (const [key,value] of Object.entries(allGold)) {
                        let dateStr = new Date (key);                     
                        labels.push(dateStr.toLocaleDateString("en-GB"))
                        data.push((1/value.XAU) / (1/allSilver[`${key}`].XAG))                            
                }

                let datasets = [
                {
                        label: 'Gold-Silver Ratio',
                        data:  data,
                        borderColor: ['rgba(255,260,86,0.2)'],
                        backgroundColor: ['rgba(218,112,214,0.2)'],
                        pointBorderColor: 'rgba(255,260,86,0.2)',
                        pointBackgroundColor: 'rgba(255,260,86,0.2)'
                 }
                ]
                let options =   {
                        title: {
                            display: true,
                            text: 'Gold Silver Ratio'
                        },
                        scales: { 
                            yAxes: [
                            {
                                ticks: {
                                     min: (Math.round(Math.min(...data)-1)),
                                     max: (Math.round(Math.max(...data)+1))          
                                }    
                            }                                               
                            ]
                        },
                        maintainAspectRatio : false
                    }
                

                
                setData({gold: {allGold}, silver: {allSilver}, lineData: {labels,datasets,options}})

                })
            )
    }

    useEffect(() => {
        fetchData()         
    }, []) 
        
    return(
        <ReactBootStrap.Row>
                <ReactBootStrap.Col>
                          <Line data={Data.lineData} options={Data.lineData.options} height='450px'></Line>
                  </ReactBootStrap.Col>
        </ReactBootStrap.Row>
           
    )
}

function getCurrentDate(separator='-', diff=0){

    let newDate = new Date();
    let date = newDate.getDate() - diff-1; 
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`;
}

export default GoldChart; 