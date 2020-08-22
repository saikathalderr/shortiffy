import React, { PureComponent } from 'react';
import {
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from 'recharts';
import { Empty } from 'antd';

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
const monthlyCount = (data) => {
  const monthlyData = [];
  data.data.totalMonthlyViews.forEach((el) => {
    const name = getMonthName(parseInt(el._id));
    const newObj = { ...el, name };
    monthlyData.push(newObj);
  });
  return monthlyData;
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className='bg-white p-2 bg-opacity-95 text-left'>
        <p className='text-black font-bold'>{`${payload[0].value} Visitors`}</p>
        <p className='text-black'>{`${payload[0].payload.name}`}</p>
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
          <Skeleton height={250} width={'100%'} />
        ) : (
          <>
            {this.props.data.totalMonthlyViews.length ? (
              <>
                <h1 className='text-black text-center theme-font-montserrat-extra-bold text-xl mb-3'>
                  Monthly Traffic
                </h1>
                <ResponsiveContainer>
                  <AreaChart data={monthlyCount(this.props)}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    {/* <Legend /> */}
                    <Area
                      type='monotone'
                      dataKey='totalClick'
                      stroke='#8884d8'
                      fill='#8884d8'
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </>
            ) : (
              <Empty />
            )}
          </>
        )}
      </div>
    );
  }
}
