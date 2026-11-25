import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    username: 'John',
    email: 'john@gmail.com',
    message: '',
  });

  console.log(form);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <form>
      <h2>Kontakt aufnehmen</h2>
      <input
        onChange={handleChange}
        className='input m-2'
        type='text'
        name='username'
        value={form.username}
      />
      <input
        onChange={handleChange}
        className='input m-2'
        type='text'
        name='email'
        value={form.email}
      />
      <textarea
        onChange={handleChange}
        className='input m-2'
        name='message'
      ></textarea>
    </form>
  );
};

export default Contact;
