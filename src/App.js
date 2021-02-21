import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    // stop unnecessary page refresh
    e.preventDefault();

    console.log('hello there');
  };

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'></form>
    </section>
  );
}

export default App;
