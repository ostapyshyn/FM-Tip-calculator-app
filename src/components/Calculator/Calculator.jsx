import React, { useEffect, useState } from 'react';
import styles from './Calculator.module.scss';
import logo from '../assets/logo.svg';
import person from '../assets/icon-person.svg';
import dollar from '../assets/icon-dollar.svg';
import clsx from 'clsx';

const Calculator = () => {
  const [tip, setTip] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');
  const [bill, setBill] = useState('');
  const [total, setTotal] = useState('');
  const [tipAmount, setTipAmount] = useState('');

  const result = clsx({
    [styles.outlined]: bill && (tip || customTip) && people,
  });

  console.log(
    `bill: ${bill}; tip: ${tip}; people: ${people}; tipAmount: ${tipAmount}; total: ${total}; customTip: ${customTip}`,
  );

  useEffect(() => {
    if (bill && (tip || customTip) && people > 0) {
      setTipAmount(
        parseFloat(
          (parseFloat(bill) * (parseInt(customTip || 0) + parseInt(tip || 0))) / 100 / people,
        ).toFixed(2),
      );
      setTotal(parseFloat((tipAmount * people + parseFloat(bill)) / people).toFixed(2));
    }
  }, [bill, customTip, people, tip, tipAmount]);

  const handleNumber = (e) => {
    let input = e.target.value;

    if (input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) setBill(input);
  };
  const handleOnClickResult = () => {
    setBill('');
    setCustomTip('');
    setTip('');
    setPeople('');
    setTipAmount('');
    setTotal('');
  };
  const handleFloat = () => {
    setBill(parseFloat(bill) || '');
  };
  const handleFloatPeople = () => {
    setPeople(parseFloat(people) || '');
  };

  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <section className={styles.calculator}>
        <div className={styles.info}>
          <div className={styles.mesage}>
            <p className={styles.name}>Bill</p>
            <span> {bill === '0' ? 'Can’t be zero' : undefined}</span>
          </div>
          <div className={styles.input}>
            <input
              className={styles.input_bill}
              style={bill === '0' ? { borderColor: '#E17052' } : null}
              type="text"
              placeholder="0"
              value={bill}
              onChange={handleNumber}
              onBlur={handleFloat}
            />
            <img src={dollar} alt="dollar" className={styles.dollar} />
          </div>

          <p className={styles.select_tip}>Select Tip %</p>

          <div className={styles.tips}>
            <button
              className={styles.tip}
              onClick={() => {
                setTip(parseInt(5));
                setCustomTip('');
              }}
              style={tip === 5 ? { background: '#26C2AE', color: '#00474B' } : null}>
              5%
            </button>
            <button
              className={styles.tip}
              onClick={() => {
                setCustomTip('');
                setTip(10);
              }}
              style={tip === 10 ? { background: '#26C2AE', color: '#00474B' } : null}>
              10%
            </button>
            <button
              className={styles.tip}
              onClick={() => {
                setCustomTip('');
                setTip(15);
              }}
              style={tip === 15 ? { background: '#26C2AE', color: '#00474B' } : null}>
              15%
            </button>
            <button
              className={styles.tip}
              onClick={() => {
                setCustomTip('');
                setTip(25);
              }}
              style={tip === 25 ? { background: '#26C2AE', color: '#00474B' } : null}>
              25%
            </button>
            <button
              className={styles.tip}
              onClick={() => {
                setCustomTip('');
                setTip(50);
              }}
              style={tip === 50 ? { background: '#26C2AE', color: '#00474B' } : null}>
              50%
            </button>
            <div className={styles.custom_input}>
              <input
                className={styles.custom}
                value={customTip}
                onChange={(e) => {
                  setCustomTip(e.target.value.replace(/[^0-9]/g, ''));
                  setTip(0);
                }}
                type="text"
                name=""
                id=""
                placeholder="Custom"
              />
            </div>
          </div>
          <div className={styles.mesage}>
            <p className={styles.name}>Number of People</p>
            <span> {people === '0' ? 'Can’t be zero' : undefined}</span>
          </div>

          <div className={styles.input} style={{ marginBottom: '0px' }}>
            <input
              type="text"
              name=""
              id=""
              placeholder="0"
              value={people}
              style={people === '0' ? { borderColor: '#E17052' } : null}
              onChange={(e) => setPeople(e.target.value.replace(/[^0-9]/g, ''))}
              onBlur={handleFloatPeople}
            />
            <img src={person} alt="person" className={styles.dollar} />
          </div>
        </div>

        <div className={styles.result}>
          <div className={styles.line}>
            <p className={styles.header}>
              Tip Amount
              <span>/ person</span>
            </p>
            <p className={styles.cash}>{tipAmount > 0 ? tipAmount : '$0.00'}</p>
          </div>
          <div className={styles.line}>
            <p className={styles.header}>
              Total
              <span>/ person</span>
            </p>

            <p className={styles.cash}>{total > 0 ? total : '$0.00'}</p>
          </div>

          <button
            className={result}
            style={{ textTransform: 'uppercase' }}
            onClick={handleOnClickResult}>
            Reset 
          </button>
        </div>
      </section> 
     
    </>
  );
};
export default Calculator;
