# React props

## `Clock` component

This will render the `Clock` component, displaying the current time in a 24-hour format and updating every second.

```jsx
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Current Time</h1>
      <p>{formatTime(currentTime)}</p>
    </div>
  );
};

export default Clock;
```

### Explanation:

1. **Imports and State Initialization**:
    - Import `React`, `useState`, and `useEffect`.
    - Initialize the `currentTime` state with the current date and time using `useState(new Date())`.

2. **Setting Up the Timer**:
    - In `useEffect`, set up an interval that updates the `currentTime` state every second.
    - Return a cleanup function from `useEffect` to clear the interval when the component unmounts, preventing memory leaks.

3. **Formatting the Time**:
    - The `formatTime` function formats the `Date` object into a 24-hour format string (`HH:MM:SS`).
    - `String.prototype.padStart(2, '0')` ensures that hours, minutes, and seconds are always two digits.

4. **Rendering the Component**:
    - The component returns a `div` containing the formatted current time, which updates every second.

### Usage:
To use this component, import and include it in your application's JSX:

```jsx
import Clock from "./components/Clock";

function App() {
  return (
    <section>
      <Clock />
    </section>
  );
}

export default App;
```

