import React from 'react';
import Chart from './chart';

const App = (props) => {
        console.log(props);
        if (!props.data) {
                if (props.loading) {
                        return <h2>Fetching data...</h2>;
                } else if (props.error) {
                        return <h2>Error fetching data</h2>;
                } else {
                        props.request();
                        return <h2>Fetching data...</h2>
                }
        }
        setTimeout(props.request, 10 * 1000);
        return (
                <Chart data={props.data} />
        );
}

export default App;
