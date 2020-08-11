import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Skeleton from 'react-loading-skeleton';

const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const getMonthName = (number) => {
  if (number >= 0) {
    const month = new Array();
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    return month[number === 0 ? 0 : number - 1];
  }
};
const monthlyCount = (data) => {
  const monthlyData = []
  data.data.totalMonthlyViews.forEach(el => {
    const name = getMonthName(parseInt(el._id));
    const newObj = {...el, name}
    monthlyData.push(newObj);
  });
  console.log(monthlyData);
  return monthlyData;
};
export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/9wnuL90w/';

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {this.props.isLoading || !this.props.data ? (
          <Skeleton height={200} width={'100%'} />
        ) : (
          <ResponsiveContainer>
            <ComposedChart data={monthlyCount(this.props)}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey='name' />
              <YAxis />
              {/* <Tooltip /> */}
              {/* <Legend /> */}
              <Area
                type='monotone'
                dataKey='totalClick'
                fill='#8884d8'
                stroke='#8884d8'
              />
              <Bar dataKey='totalClick' barSize={20} fill='#413ea0' />
              <Line type='monotone' dataKey='totalClick' stroke='#ff7300' />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>
    );
  }
}
