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
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='amount'>Paragraphs</label>
        {/* Input with onChange handler for event */}
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        {/* Submit button */}
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate!</p>
      </article>
    </section>
  );
}

export default App;
