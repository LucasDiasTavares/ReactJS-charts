import React from 'react';
import { Line as MyChart } from 'react-chartjs-2';


const Line = ({ data, labels, backgroundColor, title }) => {
    return (
        <div>
            <MyChart
                data={{
                    labels,
                    datasets: [{
                        fill: false,
                        lineTension: 0.2,
                        pointRadius: 7,
                        pointHitRadius: 10,
                        label: title,
                        data,
                        backgroundColor
                    }]
                }}
            />
        </div>
    )
}

export default Line;