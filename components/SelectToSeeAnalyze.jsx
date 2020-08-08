import React from 'react'

function SelectToSeeAnalyze() {
    return (
      <>
        <div className='text-center py-16'>
          <img
            className='mx-auto mb-10'
            src={'../static/images/select_to_see_analytics.svg'}
            width='40%'
          />
          <h1 className='theme-font text-black text-2xl'>
            Analyze your links <br /> Shorten, Share, Analyze your long link's.
            <br /> <span className='text-orange-900'>Select a link to see stats.</span>
          </h1>
        </div>
      </>
    );
}

export default SelectToSeeAnalyze
