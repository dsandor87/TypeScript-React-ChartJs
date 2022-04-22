
import styled from '@emotion/styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Country } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  countries :Country[];
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};


const ChartWrapper = styled.div`
max-width:700px;
margin: 0 auto`


const BarChart: React.FunctionComponent<Props> = ({countries}) => {

  const generateChartData = () => {

    const data: number[] = [];
    const labels: string[] = [];

    countries.forEach(contry => {
      data.push(contry.NewConfirmed)
      labels.push(contry.Country)
    })

    return {
      labels,
  datasets: [
    {
      label: 'New Confirmed',
      data,
      backgroundColor: [ 'rgba(255, 99, 132, 0.5)','rgba(54, 162, 235, 0.5)','rgba(255, 206, 806, 0.5)','rgba(75, 192, 192, 0.5)']
      
    }
   
  ],
    }

  }


  return ( <ChartWrapper><Bar data={generateChartData()} options={options}/></ChartWrapper>)

} 
export default BarChart;