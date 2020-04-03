import React from 'react';
import { Pie as MyChart } from 'react-chartjs-2';


const Pie = ({ data, labels, backgroundColor, title }) => {
    return (
        <div>
            <MyChart
                data={{
                    labels,
                    datasets: [{
                        label: title,
                        data,
                        backgroundColor
                    }]
                }}
            />
        </div>
    )
}

export default Pie;
