import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import Skeleton from 'react-loading-skeleton';

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
    const radius = 25;

  return (
    <g>
      <circle
        cx={x + width / 2}
        cy={y - radius}
        r={radius}
        fill='#4300ff'
        fill-opacity='0.0'
      />
      <image
        xlinkHref={`http://catamphetamine.gitlab.io/country-flag-icons/3x2/${value}.svg`}
        x={x + width / radius}
        y={y - radius}
        fill='#fff'
        width={width}
        textAnchor='middle'
        dominantBaseline='middle'
      />
    </g>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {this.props.isLoading || !this.props.data ? (
          <Skeleton height={250} width={'100%'} />
        ) : (
          <>
            <h1 className='text-black text-center theme-font-montserrat-extra-bold text-xl mb-3'>
              Country Traffic
            </h1>
            <ResponsiveContainer>
              <BarChart data={this.props.data.totalCountryViews} barSize={20}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='_id' />
                <YAxis type='number' domain={[0, 'dataMax + 10']} />
                <Tooltip />
                <Legend />
                <Bar dataKey='visitor' fill='#8884d8'>
                  <LabelList dataKey='_id' content={renderCustomizedLabel} />
                </Bar>
                {/* <Bar dataKey='uv' fill='#82ca9d' /> */}
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </div>
    );
  }
}
