import './chart.css';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


export default function Chart({title, data, dataKey, grid}) {

  return (
    <div className="chart">
        <h3 className="chartTitle" style={{marginBottom: "10px"}}>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='white' />
                <Line type="monotone" dataKey={dataKey} stroke='white' />
                <Tooltip itemStyle={{color: 'black'}} />
                {grid && <CartesianGrid stroke='#283149' strokeDasharray="5 5" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
