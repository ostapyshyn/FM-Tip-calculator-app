import React, { useState } from 'react';
import styles from './Calculator.module.scss';
import logo from '../assets/logo.svg';
import person from '../assets/icon-person.svg';
import dollar from '../assets/icon-dollar.svg';

const Calculator = () => {
  const [percent, setPercent] = useState();
  const [people, setPeople] = useState();
  const [bill, setBill] = useState();
  const [message, setMessage] = useState();

  const inputValidation = (data) => {
    const regEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!regEx.test(data) && data !== '') {
      setMessage('Can’t be zero');
    } else {
      setMessage('');
    }
  };

  const handleSearchInput = (event) => {
    setPeople(event.target.value);
    inputValidation(event.target.value);
  };

  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <section className={styles.calculator}>
        <div className={styles.info}>
          <p className={styles.name}>Bill</p>
          <div className={styles.input}>
            <input className={styles.input_bill} type="text" placeholder="0" />
            <img src={dollar} alt="dollar" className={styles.dollar} />
          </div>

          <p className={styles.select_tip}>Select Tip %</p>

          <div className={styles.tips}>
            <button
              className={styles.tip}
              onClick={() => setPercent(5)}
              style={percent === 5 ? { background: '#26C2AE', color: '#00474B' } : null}>
              5%
            </button>
            <button
              className={styles.tip}
              onClick={() => setPercent(10)}
              style={percent === 10 ? { background: '#26C2AE', color: '#00474B' } : null}>
              10%
            </button>
            <button
              className={styles.tip}
              onClick={() => setPercent(15)}
              style={percent === 15 ? { background: '#26C2AE', color: '#00474B' } : null}>
              15%
            </button>
            <button
              className={styles.tip}
              onClick={() => setPercent(25)}
              style={percent === 25 ? { background: '#26C2AE', color: '#00474B' } : null}>
              25%
            </button>
            <button
              className={styles.tip}
              onClick={() => setPercent(50)}
              style={percent === 50 ? { background: '#26C2AE', color: '#00474B' } : null}>
              50%
            </button>
            <input className={styles.custom} type="text" name="" id="" placeholder="Custom" />
          </div>
          <div className={styles.mesage}>
            <p className={styles.name}>Number of People</p>
            <span>{message}</span>
          </div>

          <div className={styles.input} style={{ marginBottom: '0px' }}>
            <input
              type="text"
              name=""
              id=""
              placeholder="0"
              value={people}
              onChange={handleSearchInput}
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
            <p className={styles.cash}>$0.00</p>
          </div>
          <div className={styles.line}>
            <p className={styles.header}>
              Total
              <span>/ person</span>
            </p>
            <p className={styles.cash}>$0.00</p>
          </div>

          <button style={{ textTransform: 'uppercase' }}>Reset</button>
        </div>
      </section>
    </>
  );
};

export default Calculator;
