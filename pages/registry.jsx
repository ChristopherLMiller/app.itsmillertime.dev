import React, { useState } from 'react';
import redirectIfProd from 'src/utils/functions/redirectIfProd';
import { ContactEmailTemplate } from 'src/templates/email/contact';

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
        body: JSON.stringify({ toEmail: state.email, fromEmail: 'support@christopherleemiller.me', fromName: 'No-Reply', subject: 'Test Email', mjmlString: ContactEmailTemplate({email: state.email, message: "Hi there i need a website", name: state.name}) })
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