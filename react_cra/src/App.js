import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('RUN FOR once');
  }, []);
  useEffect(() => {
    console.log('RUN FOR counter');
  }, [counter]);
  useEffect(() => {
    console.log('RUN FOR keyword');
  }, [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder='Search here...' />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
