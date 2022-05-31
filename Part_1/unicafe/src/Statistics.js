import Header from "./Header";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({header,good,neutral,bad}) => {
    const all = good+bad+neutral
    if (all === 0)
    return (
        <div>
            <Header text={header} />
            <p>No feedback given</p>
        </div>
        
    )

    return (
<div>
    <Header text={header} />
    <table>
    <StatisticsLine text = "good" value={good} />
    <StatisticsLine text = "neutral" value={neutral} />
    <StatisticsLine text = "bad" value={bad} />
    <StatisticsLine text = "all" value={all} />
    <StatisticsLine text = "average" value={(good-bad)/all} />
    <StatisticsLine text = "positive" value={good/all * 100} symbol="%"/>
    </table>
    
    
</div>)}

export default Statistics