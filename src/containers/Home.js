import React, { useState, useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        fetchData() 
    }, [])

    const [hasError, setErrors] = useState(false);
    const [cases, setCases] = useState({});

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
        .then(res => setCases(res))
        .catch(err => setErrors(err));
    }

    console.log(cases)

    return (
        <div>
            <h1> Home </h1>
            {/* <span>Current Date: {JSON.stringify(cases[0].date)}</span>
            <hr/>
            <span>Current Confirmed Cases: {JSON.stringify(cases[0].confirmed)}</span>
            <hr/>
            <span>Current Critical Cases: {JSON.stringify(cases[0].critical)}</span>
            <hr/>
            <span>Current Deaths: {JSON.stringify(cases[0].deaths)}</span>
            <hr/>
            <span>Current Recovered: {JSON.stringify(cases[0].recovered)}</span>
            <hr/> */}
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    )
}

export default Home;