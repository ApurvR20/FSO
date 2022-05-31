const StatisticsLine = ({text,value, symbol}) => {
    return (
    <tr>
        <td>{text} </td>
        <td>{value}</td>
        <td>{symbol}</td>  </tr>)
}

export default StatisticsLine