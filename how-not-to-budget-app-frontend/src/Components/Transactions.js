import axios from "axios";
import { useState, useEffect } from "react";


const API = process.env.REACT_APP_API_URL;
console.log(API, "Testing API")

function Transactions() {
    const [ transactions, setTransactions ] = useState([]);

    // take data and save it to setTransactions
    useEffect(() => {
        axios
        .get(`${API/transactions}`)
        .then((res) => {
        setTransactions(res.data);
        })
        .catch((e) => console.error("catch", e));
    }, [transactions]);

    return (
        <div className="Transactions">
            <h1>This is the transactions Component</h1>
        </div>
    )
    
}

export default Transactions;
