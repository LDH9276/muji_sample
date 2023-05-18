import { useState, useEffect } from 'react';
import { sendLoginRequest } from '../api/LoginApi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login({ setIsLoggedIn, setUserName, setUserId, setUserProfile}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginAlert, setLoginAlert] = useState(false);
  const navigate = useNavigate();
  const loginPHP = 'http://leedh9276.dothome.co.kr/test/verify.php';

  async function verifyToken() {
    const token = localStorage.getItem('token');
    const response = await axios(loginPHP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    });
    const data = await response.data;
    if (data.success === true) {
      setIsLoggedIn(true);
      alert('이미 로그인 되었습니다.');
    }
  }
  
  useEffect(() => {
    verifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // 로그인 버튼 클릭 시
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await sendLoginRequest(id, password);
      setIsLoggedIn(true);
      localStorage.setItem('token', data.token);
      if (data.success === true) {
        setUserId(data.user_id);
        setUserName(data.user_name);
        setUserProfile(data.user_profile);
        navigate('/');
      } else {
        setLoginAlert(true);
      }

    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className='login'>
      <h1> <img src={`${process.env.PUBLIC_URL}/images/logo-black.svg`} alt='무지'/></h1>
      <p className='login-title'>로그인</p>
      <form onSubmit={onSubmit}>
        <p className='id_inputbox'>
          <input type="text" id="id" name="id" value={id} onChange={(event) => setId(event.target.value)} placeholder='무지 회원 아이디'/>
        </p>
        <p className='pw_inputbox'>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='비밀번호'/>
        </p>
        {loginAlert && <div className='login-alert'>아이디 또는 비밀번호가 일치하지 않습니다.</div>}
        <button type="submit" className='login-submit'>LOGIN</button>

        <p className='sign-text'>회원이 아니신가요?</p>
        <button type="button" className='login-signup' onClick={() => navigate('/signup')}>회원가입</button>
      </form>

    </div>
  );
}

export default Login;
