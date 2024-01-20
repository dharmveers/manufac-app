import "../components/style.css";

const GammaTable = ({data}) => {
    
      return (
        <table className="tableData">
          <thead>
            <tr>
              <th>Measure</th>
              {Object.entries(data).map(([className])=>(
                <th key={className}>{className}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          <tr>
                <td>Gama Mean</td>
                {Object.values(data).map((values) => (
                    <td>{values.Mean}</td>
                ))}
            </tr>
          <tr>
                <td>Gama Median</td>
                {Object.values(data).map((values) => (
                    <td>{values.Median}</td>
                ))}
            </tr>
          <tr>
                <td>Gama Mode</td>
                {Object.values(data).map((values) => (
                    <td>{values.Mode}</td>
                ))}
            </tr>
          </tbody>
        </table>
      );
  };
export default GammaTable;