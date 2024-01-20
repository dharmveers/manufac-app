import "../components/style.css";
import React, { useEffect, useState } from 'react'
import { calculateClassWiseState } from "../utiliies/calculateClassWiseState";
import Table from "./Table";
import GammaTable from "./GammaTable";
import { gamaSetData } from "../utiliies/datasets";
import { calculateGamma } from "../utiliies/calculateGamma";

const Manufac = () => {
    const gamaData = calculateGamma(gamaSetData);
    const [state, setState] = useState({});
    useEffect(() => {
        const flavanoidsState = calculateClassWiseState('Flavanoids');
        setState(flavanoidsState);
    }, []);
    return (
        <div className="section">
            <h1 style={{ textAlign: "center" }}>React App</h1>
            <div className="container">
                <div className="card">
                    <h3>1. Class-wise mean, median, mode of
                        “Flavanoids”</h3>
                    <Table data={state} />
                </div>
                <div className="card">
                <h3>2. Class-wise mean, median, mode of “Gamma = (Ash * Hue) / Magnesium.”</h3>
                <GammaTable data={gamaData} />
                </div>
            </div>
        </div>
    )
}

export default Manufac