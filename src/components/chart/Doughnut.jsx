import React from 'react';
import { Doughnut as MyChart } from 'react-chartjs-2';


const Doughnut = ({ data, labels, backgroundColor, title }) => {
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

export default Doughnut;