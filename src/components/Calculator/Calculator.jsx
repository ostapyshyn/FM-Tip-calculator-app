import React from 'react';
import styles from './Calculator.module.scss';
import logo from '../assets/logo.svg';

const Calculator = () => {
  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <section className={styles.calculator}>
        <div className={styles.info}>
          <p>Bill</p>
          <input type="number" />
          <p>Select Tip %</p>
          <p>Number of People</p>
          <input type="number" name="" id="" />
        </div>

        <div className={styles.result}>
          <p>Tip Amount / person</p>
          <p>Total / person</p>
          <button>Reset</button>
        </div>
      </section>
    </>
  );
};

export default Calculator;
