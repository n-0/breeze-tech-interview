import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, LabelSeries, HorizontalGridLines } from 'react-vis';


// transformData adds color values to co2 data
const transformData = (data) => {
        let d = [];
        for (let i = 0; i < data.length; i++) {
                d[i] = { 'x': 'Room' + (i + 1), 'y': data[i]['Room' + i]};
                if (data[i]['Room' + i] <= 1000) {
                        d[i].color = '#008000';
                } else if (data[i]['Room' + i] <= 2000) {
                        d[i].color = '#FFFF00';
                } else {
                        d[i].color = '#FF0000';
                }
        }
        return d;
}

// Chart displays a vertical bar chart for co2 values
const Chart = (props) => {
        const data = transformData(props.data);
        const chartWidth = 600;
        const chartHeight = 500;
        const chartDomain = [0, 5000];
        return (
                <div id="chart">
                        <XYPlot
                                xType="ordinal"
                                width={chartWidth}
                                height={chartHeight}
                                yDomain={chartDomain}
                                colorType="literal"
                        >
                                <XAxis />
                                <VerticalBarSeries data={data} />
                                <LabelSeries
                                        labelAnchorY="text-after-edge"
                                        labelAnchorX="middle"
                                        data={data.map(o => {
                                                return { ...o, label: o.y.toString() + 'ppm' }
                                        })}
                                />
                                <HorizontalGridLines />
                        </XYPlot>
                </div>
        );
}

export default Chart;