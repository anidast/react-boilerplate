import React from 'react';
import ConfirmedNumber from './ConfirmedNumber';
import AMonthCases from './AMonthCases';
import TopRegion from './TopRegion';

function Cases() {
  return (
    <div className="box has-background-info m-4">
      <ConfirmedNumber />
      <AMonthCases />
      <TopRegion />

      <p className="is-size-6 has-text-light has-text-right">
        REAL-TIME REPORT
        <i className="fa fa-chevron-right mx-2" />
      </p>
    </div>
  );
}

export default Cases;
