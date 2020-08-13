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
const days = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
];

const getMonthNames = (data) => {
  const DATA = [];
  data.totalTimeViews.forEach((el) => {
    const month = getMonthName(el._id.month);
    var d = new Date(`${el._id.year}-${el._id.month}-${el._id.day}`);
    const newObj = {
      ...el,
      month,
      year: el._id.year,
      day: days[d.getDay()],
    };
    DATA.push(newObj);
  });
  console.log(DATA);
  return DATA;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className='bg-white p-2 bg-opacity-95'>
        <p className='text-black font-bold'>{`${payload[0].value} Visitors`}</p>
        <p className='text-black'>{`${label} ${payload[0].payload.month} ${payload[0].payload.year}`}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/9wnuL90w/';

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {this.props.isLoading || !this.props.data ? (
          <Skeleton height={159} width={'100%'} />
        ) : (
          <>
            <ResponsiveContainer>
              <ComposedChart data={getMonthNames(this.props.data)}>
                <CartesianGrid stroke='#f5f5f5' />
                <XAxis dataKey='day' />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                {/* <Legend /> */}
                <Area
                  type='monotone'
                  dataKey='visitor'
                  fill='#8884d8'
                  stroke='#8884d8'
                />
                <Bar dataKey='visitor' barSize={20} fill='#413ea0' />
                <Line type='monotone' dataKey='visitor' stroke='#ff7300' />
              </ComposedChart>
            </ResponsiveContainer>
          </>
        )}
      </div>
    );
  }
}
