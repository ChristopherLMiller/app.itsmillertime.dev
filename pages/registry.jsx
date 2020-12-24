import React, { useState } from 'react';
import redirectIfProd from 'src/utils/functions/redirectIfProd';

const Registry = () => {
    const [state, setState] = useState({ name: '', email: '' });
    const handleChange = event => {
      const { name, value } = event.target;
      setState({
        ...state,
        [name]: value
      });
    }
    const handlePress = () => {
      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: state.name, email: state.email })
      });
    }
    return (
        <>
      <div>
      <label>
        Name
        <input
          name="name"
          type="text"
          onChange={handleChange}
        />
      </label>
      </div>
      <label>
        Email
        <input
          name="email"
          type="email"
          onChange={handleChange}
        />
      </label>
      <div>
      <button onClick={handlePress}>Send</button>
      </div>
        </>
    );
}

Registry.getInitialProps = async ({ res }) => {
  redirectIfProd(res);

  return {}
};

export default Registry;