import Confetti from 'react-confetti';
import styles from './App.module.css';

export default function App() {
  return (
    <>
      <h1 className={styles.title}>Hello! 🐱</h1>
      <Confetti recycle={false} />
    </>
  );
}
