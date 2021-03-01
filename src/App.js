import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    // stop unnecessary page refresh
    e.preventDefault();
    let amount = parseInt(count);
    // perform validation on count:
    // should not be less than 1
    if (count <= 0) {
      amount = 1;
    }
    // should not be more than 8
    if (count > 8) {
      amount = 8;
    }
    // set text state to specified number of paragraphs
    setText(data.slice(0, amount));
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
          // set count state to value of captured event
          onChange={(e) => setCount(e.target.value)}
        />
        {/* Submit button */}
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {/* return a paragraph for each paragraph in sliced data */}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;;
        })}
      </article>
    </section>
  );
}

export default App;
