import React, { memo, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
// import './index.less';

const BarChart = () => {
	// const chartDom: any = document.getElementById('chart-column');
	// const chartRef: any = useRef(null)
	// const myChart: any = echarts.init(chartRef);
	const chartRef: any = useRef(null);
	const chartInstance: any = useRef(null);

	useEffect(() => {
		if (chartRef.current) {
			chartInstance.current = echarts.init(chartRef.current);
			const option = {
				title: {
					text: 'Giá xe theo odo',
					textStyle: {
						fontWeight: 400,
						fontSize: 14,
					},
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				xAxis: {
					type: 'value',
					splitLine: {
						show: true,
						lineStyle: {
							type: 'dashed',
						},
					},
					axisLine: {
						show: true,
					},
					splitNumber: 2,
					axisLabel: {
						fontWeight: 700,
						fontSize: 8,
						formatter: function (value: any) {
							return value + 'M';
						},
					},
				},
				yAxis: {
					type: 'category',
					data: [
						'165.001 - 175.000 km',
						'150.001 - 165.000 km',
						'135.000 - 150.000 km',
						' 120.001 - 135.000 km',
						'105.001 - 120.000 km',
						'90.001 - 105.000 km',
						'85.001 - 90.000 km',
						'55.001 - 80.000 km',
						'60.001 - 75.000 km',
						'45.001 - 60.000 km',
						'30.001 - 45.000 km',
						'15.001-30.000 km',
						'< 15.000 km',
					],
					axisLabel: {
						fontWeight: 700,
						fontSize: 8,
					},
					axisTick: {
						show: false,
					},
				},
				series: [
					{
						name: '2012',
						type: 'bar',
						data: [255, 260, 265, 270, 275, 294, 389, 410, 440, 450, 490, 560, 750],
						itemStyle: {
							color: '#003DC6',
						},
						padding: [0, 0, 0, 10],
						label: {
							fontWeight: 700,
							fontSize: 8,
							show: true,
							position: 'right',
							formatter: function ({ data }: { data: any }) {
								return data === '' ? '' : data + 'M';
							},
						},
					},
				],
			};
			chartInstance.current.setOption(option, true);

			// re-render chart on window resize
			const resizeHandler = () => {
				chartInstance.current.resize();
			};
			window.addEventListener('resize', resizeHandler);
			return () => {
				window.removeEventListener('resize', resizeHandler);
			};
		}
	}, []);
	return (
		<>
			<div className="wrapper-chart">
				<div ref={chartRef} id="chart-column" style={{ width: '100%', height: '400px' }} className="chart-render"></div>
			</div>
		</>
	);
};

export default memo(BarChart);
