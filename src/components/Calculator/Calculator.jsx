import React from 'react';
import styles from './Calculator.module.scss';
import logo from '../assets/logo.svg';

const Calculator = () => {
  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <section className={styles.calculator}>
        <div className={styles.info}>
          <p className={styles.name}>Bill</p>
          <input type="number" />
          <p className={styles.name}>Select Tip %</p>
          <p className={styles.name}>Number of People</p>
          <input type="number" name="" id="" />
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
