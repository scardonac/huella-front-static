import React, { useState } from 'react';
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts';
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
import { Imagenes } from '../../../assets/Images/ImagenProvider';

const { Planetgrown } = Illustrations; // Illustrations
const { Grupo2572, Goalshome } = Imagenes; // Images

export const GaugeChart3 = () => {
    const [series, setSeries] = useState([67]);
    const [options] = useState({
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -130,
                endAngle: 130,
                hollow: {
                    margin: 15,
                    size: '70%',
                    image: Grupo2572,
                    imageWidth: 64,
                    imageHeight: 64,
                    imageClipped: false,
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff',
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 70,
                        fontSize: '22px',
                    },
                },
            },
        },
        fill: {
            type: 'image',
            image: {
                src: [Goalshome],
            },
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['¡Felicidades!'],
    });

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="radialBar" height={350} />
        </div>
    );
};
