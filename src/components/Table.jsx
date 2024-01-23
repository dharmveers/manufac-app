import style from "../components/style.css";
import { calculateMean , calculateMedian ,calculateMode} from "../utiliies/calculateMeanMedianMode";


const Table = ({ data }) => {
    return (
        <table className="tableData">
        <thead>
            <tr>
                <th className={style.header}>Measure</th>
                {Object.keys(data).map((className) => (
                    <th key={className} className="row">{className}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Flavanoids Mean</td>
                {Object.values(data).map((values, index) => (
                    <td key={index} className="row">{calculateMean(values).toFixed(3)}</td>
                ))}
            </tr>
            <tr>
                <td>Flavanoids Median</td>
                {Object.values(data).map((values, index) => (
                    <td key={index} className="row">{calculateMedian(values).toFixed(3)}</td>
                ))}
            </tr>
            <tr>
                <td>Flavanoids Mod</td>
                {Object.values(data).map((values, index) => (
                    <td key={index} className="row">{calculateMode(values)}</td>
                ))}
            </tr>
        </tbody>
    </table>
    )
  };
export default Table;