import React from 'react';
import { Bar as MyChart } from 'react-chartjs-2';


const Bar = ({ data, labels, backgroundColor, title }) => {
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

export default Bar;