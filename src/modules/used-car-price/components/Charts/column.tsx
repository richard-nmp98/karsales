import React, { memo, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
// import './index.less';

const ColumnChart = () => {
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
					text: 'Tần xuất giao dịch theo giá bán :',
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
					type: 'category',
					data: [110, '', 207, '', 304, '', 401, '', 498, '', 594, '', 691, '', 788, '', 885],
					axisTick: {
						show: false,
					},
					axisLabel: {
						fontWeight: 700,
						fontSize: 8,
						formatter: function (value: number | string) {
							return value ? value + 'M' : '';
						},
					},
				},
				yAxis: {
					type: 'value',
					splitNumber: 2,
					axisLine: {
						show: true,
					},
					splitLine: {
						show: false,
					},
					axisLabel: {
						fontWeight: 700,
						fontSize: 8,
					},
				},
				series: [
					{
						data: ['', 3, '', 14, '', 12, '', 12, '', 5, '', 11, '', 16, '', 9, ''],
						type: 'bar',
						backgroundStyle: {
							color: 'rgba(180, 180, 180, 0.2)',
						},
						itemStyle: {
							color: '#003DC6',
						},
						padding: [0, 0, 0, 10],
						barCategoryGap: 0,
						label: {
							fontWeight: 700,
							fontSize: 8,
							show: true,
							position: 'top',
							formatter: function ({ data }: { data: number | string }) {
								return data === '' ? '' : data;
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

export default memo(ColumnChart);
