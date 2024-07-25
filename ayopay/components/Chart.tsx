import React from 'react'
import {Chart as ChartJS, ArcElement,Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({accounts}: {accounts: DoughnutChartProps}) => {
    const data = {
        datasets: [
            {
                label: 'banks',
                data: ['2000', '2343', '9899'],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['first bank', 'gt bank', 'wema bank']
    }
  return (
    <Doughnut data={data} options={{
        cutout: '65%',
        plugins: {
            legend: {
                display: false
            }
        }
    }} />
  )
}

export default Chart