import React from 'react';
import styles from './Calculator.module.scss';
import logo from '../assets/logo.svg';
import person from '../assets/icon-person.svg';
import dollar from '../assets/icon-dollar.svg';

const Calculator = () => {
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
            <button className={styles.tip}>5 %</button>
            <button className={styles.tip}>10 %</button>
            <button className={styles.tip}>15 %</button>
            <button className={styles.tip}>25 %</button>
            <button className={styles.tip}>50 %</button>
            <input className={styles.custom} type="text" name="" id="" placeholder="Custom" />
          </div>

          <p className={styles.name}>Number of People</p>
          <div className={styles.input}>
            <input type="text" name="" id="" placeholder="0" />
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
