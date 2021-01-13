import React, { useState, useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        fetchData() 
    }, [])

    const [hasError, setErrors] = useState(false);
    const [cases, setCases] = useState({});
    const [date, setDate] = useState('loading...')
    const [confirmed, setConfirmed] = useState('loading...')
    const [critical, setCritical] = useState('loading...')
    const [deaths, setDeaths] = useState('loading...')
    const [recovered, setRecovered] = useState('loading...')
    
    async function fetchData() {
        const res = await fetch("https://covid-19-data.p.rapidapi.com/report/totals?date=2020-07-21", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "88ab03ceaamshd333a0ab9d9d07ap103422jsn2fc053689012",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
            }
        })
        res
        .json()
        .then(res => addInfo(res))
        .catch(err => setErrors(err));
    }

    function addInfo(res) {
        setDate(res[0].date);
        setConfirmed(res[0].confirmed);
        setCritical(res[0].critical);
        setDeaths(res[0].deaths);
        setRecovered(res[0].recovered);
    }

    console.log(cases)

    return (
        <div>
            <h1> Home </h1>
            <span>Current Date: {date}</span>
            <hr/>
            <span>Current Confirmed Cases: {confirmed}</span>
            <hr/>
            <span>Current Critical Cases: {critical}</span>
            <hr/>
            <span>Current Deaths: {deaths}</span>
            <hr/>
            <span>Current Recovered: {recovered}</span>
            <hr/>
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    )
}

export default Home;