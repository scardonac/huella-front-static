import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
import { Imagenes } from '../../../assets/Images/ImagenProvider';

const { Planetgrown } = Illustrations; // Illustrations
const { Grupo2572, Goalshome } = Imagenes; // Images

export const GaugeChart5 = () => {
    const [series, setSeries] = useState([60]);
    const [options] = useState({
        chart: {
            height: 350,
            type: 'radialBar',
            // toolbar: {
            //     show: true,
            // },
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
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35,
                    },
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -45,
                        show: true,
                        color: '#888',
                        fontSize: '17px',
                    },
                    value: {
                        offsetY: 55,
                        show: true,
                        color: '#333',
                        fontSize: '22px',
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['¡Felicidades!'],
    });

    return (
        <div id="card">
            <div id="chart">
                <ReactApexChart options={options} series={series} type="radialBar" height={350} />
            </div>
        </div>
    );
};
