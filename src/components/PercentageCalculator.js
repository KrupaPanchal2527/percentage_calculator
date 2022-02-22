import React from 'react';

const PercentageCalculator = () => {
  // [TODO] - optimize this to use useReducer hook
  const [origAmt, setOrigAmt] = React.useState('');
  const [percentage, setPercentage] = React.useState('');
  const [finalAmt, setFinalAmt] = React.useState('');

  const calculateFinalAmt = (origAmt, percentage) => {
    return (origAmt * percentage) / 100;
  };

  const calculateOrigAmount = (percentage, finalAmt) => {
    return (finalAmt * 100) / percentage;
  };

  const calculatePercentage = (origAmt, finalAmt) => {
    return (finalAmt * 100) / origAmt;
  };

  const inputChangeHandler = (field, value) => {
    switch (field) {
      case 'origAmt': {
        setOrigAmt(value);
        if (finalAmt && percentage) {
          setPercentage(calculatePercentage(value, finalAmt));
        } else if (percentage && !finalAmt) {
          setFinalAmt(calculateFinalAmt(value, percentage));
        } else if (finalAmt) {
          setPercentage(calculatePercentage(value, finalAmt));
        }
        break;
      }
      case 'percentage':
        setPercentage(value);
        if (value === '0') {
          return;
        }
        if (finalAmt && origAmt) {
          setFinalAmt(calculateFinalAmt(origAmt, value));
        } else if (finalAmt) {
          setOrigAmt(calculateOrigAmount(value, finalAmt));
        } else if (origAmt) {
          setFinalAmt(calculateFinalAmt(origAmt, value));
        }
        break;
      case 'finalAmt':
        setFinalAmt(value);
        if (origAmt) {
          setPercentage(calculatePercentage(origAmt, value));
        } else if (percentage && !origAmt) {
          setOrigAmt(calculateOrigAmount(percentage, value));
        } else if (origAmt && percentage) {
          setOrigAmt(calculateOrigAmount(percentage, value));
        }
        break;
      default:
    }
  };

  return (
    <>
      <div className='input-field-container'>
        <div className='input-field-header'>Original Amount</div>
        <input
          placeholder='1000'
          value={origAmt}
          onChange={e => inputChangeHandler('origAmt', e.target.value)}
        />
      </div>
      <div className='input-field-container'>
        <div className='input-field-header'>Percentage Amount</div>
        <input
          placeholder='20'
          value={percentage}
          onChange={e => inputChangeHandler('percentage', e.target.value)}
        />
      </div>
      <div className='input-field-container'>
        <div className='input-field-header'>Final Amount</div>
        <input
          placeholder='200'
          value={finalAmt}
          onChange={e => inputChangeHandler('finalAmt', e.target.value)}
        />
      </div>
    </>
  );
};

export default PercentageCalculator;
