import Confetti from 'react-confetti';
import styles from './App.module.scss';
import { useState } from 'react';

function BrokenComponent() {
  throw new Error('Broken component');
}

export default function App() {
  const [error, setError] = useState(false);
  const throwKnownError = () => {
    throw new Error('✋ This is a known error that will be caught by Sentry');
  };

  const handleLoadBrokenComponent = () => {
    setError(true);
  };

  return (
    <>
      <h1 className={styles.title}>Hello! 🐱</h1>
      <button onClick={() => throwKnownError()}>🔴 Throw controlled error 🔴</button>
      <button className={styles.fireButton} onClick={handleLoadBrokenComponent}>
        🔥 Break the app 🔥
      </button>
      {/* @ts-expect-error Breaks app deliberately */}
      {error && <BrokenComponent />}
      <Confetti recycle={false} />
    </>
  );
}
