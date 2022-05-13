import axios from 'axios';
import React, {useState, useEffect } from 'react';
import APIRUL from '../Helpers/environment';
import Input from './Input';

function ApiFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios(`${APIURL}/search/results`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            },
            error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        <div className="resultBox">
            <h5>Your search yielded the following results: </h5>
                <div className="fetchOutput">
                     <pre>Organization: {JSON.stringify(data.WhoisRecord.registrant.organization, null, 2)}</pre>
                    <pre>Base State: {JSON.stringify(data.WhoisRecord.registrant.state, null, 2)}</pre>
                    <pre>Base Country: {JSON.stringify(data.WhoisRecord.registrant.country, null, 2)}</pre>
                    <pre>Registrar Name: {JSON.stringify(data.WhoisRecord.registrarName, null, 2)}</pre>
                </div>
        </div>
    )
}

export default ApiFetch;