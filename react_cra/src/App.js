import { useState, useEffect } from 'react';

function Hello() {
  const effectFn = () => {
    console.log('Created')
    return destroyFn
  }
  const destroyFn = () => console.log('Destroyed');
  
  useEffect(effectFn, [])
  
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
