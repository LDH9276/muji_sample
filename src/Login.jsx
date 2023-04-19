import { useState } from 'react';
import { sendLoginRequest } from './Api';

function Login(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await sendLoginRequest(id, password);
      console.log(data);
      setIsLoggedIn(true);
      setUserId(data.user_id);
      setUserName(data.user_name);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="Id">
          enter your id
        </label>
        <input type="text" id="id" name="id" value={id} onChange={(event) => setId(event.target.value)} />
        <label htmlFor="password">
          enter password
        </label>
        <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />

        <button type="submit">Submit!</button>
      </form>
      {isLoggedIn && <div>user_id: {userId}</div>}
      {isLoggedIn && <div>user_name: {userName}</div>}
      
      {error && <div>{error}</div>}
    </div>
  );
}

export default Login;
