import React from 'react';
import styles from './Calculator.module.scss';

const Calculator = () => {
  return (
    <section className={styles.calculator}>
      <div>
        <p>Bill</p>
        <input type="number" />
        <p>Select Tip %</p>
        <p>Number of People</p>
        <input type="number" name="" id="" />
      </div>

      <div>
        <p>Tip Amount / person</p>
        <p>Total / person</p>
        <button>Reset</button>
      </div>
    </section>
  );
};

export default Calculator;
