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
                <td>Mean</td>
                {Object.values(data).map((values, index) => (
                    <td key={index} className="row">{calculateMean(values)}</td>
                ))}
            </tr>
            <tr>
                <td>Median</td>
                {Object.values(data).map((values, index) => (
                    <td key={index} className="row">{calculateMedian(values)}</td>
                ))}
            </tr>
            <tr>
                <td>Mod</td>
                {Object.values(data).map((values, index) => (
                    <td key={index} className="row">{calculateMode(values)}</td>
                ))}
            </tr>
        </tbody>
    </table>
    )
  };
export default Table;