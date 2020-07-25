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

export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/9wnuL90w/';

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey='amt'
              fill='#8884d8'
              stroke='#8884d8'
            />
            <Bar dataKey='pv' barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
          </ComposedChart>
        </ResponsiveContainer>
        <div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0 float-right'>
            <div className='relative'>
              <select
                className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
              >
                <option>Today</option>
                <option>Last 7 Days</option>
                <option>Last 28 Days</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
