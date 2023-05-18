import { useState, useEffect, useRef } from 'react';
import { sendSignRequest } from '../api/SignApi';
import { useNavigate } from 'react-router-dom';
import './sign.css';


function Sign(props) {

  // 입력값 State
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // 프로필 state
  const [profile, setProfile] = useState('');
  const [profileName, setProfileName] = useState('');
  const imgRef = useRef();

  const handleFileChange = (event) => {
    saveImg();
    setProfile(event.target.files[0]);
  };

  const saveImg = () => {
    const img = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setProfileName(reader.result);
    };
  };
  
  const navigate = useNavigate();
  
  // 토큰 확인
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 입력 성공 여부 State
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // 입력값을 서버로 전송한다.
  const onSubmit = async (event) => {
    event.preventDefault();

    if (id === '') {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (passwordCheck === '') {
      alert('비밀번호 확인을 입력해주세요.');
      return;
    }
    if (name === '') {
      alert('이름을 입력해주세요.');
      return;
    }
    if (email === '') {
      alert('이메일을 입력해주세요.');
      return;
    }
    // 비밀번호 일치 여부 확인
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try { // 응답 성공
      const data = await sendSignRequest(id, password, name, email, profile);

      // 아이디 중복 체크
      if(data.idChk === false) {
        alert('이미 존재하는 아이디입니다.');
        return;
      }

      // 체크 완료
      setSuccess(true);
      if(data.success === true) {
        alert('회원가입이 완료되었습니다.');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className='sign'>
      <form onSubmit={onSubmit} encType="multipart/form-data">

        <p>
          프로필 사진
        </p>
        <p>
          <img src={profileName ? profileName : `http://leedh9276.dothome.co.kr/test/img/profile/defaultprofile.png`} alt="" />
        </p>
        <input type="file" id="profile" name="profile" onChange={handleFileChange} ref={imgRef} />

        <label htmlFor="Id">
          ID
        </label>
        <input type="text" id="id" name="id" value={id} onChange={(event) => setId(event.target.value)} />
        <label htmlFor="password">
          비밀번호
        </label>
        <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />

        <label htmlFor="passwordCheck">
          비밀번호 확인
        </label>
        <input type="password" id="passwordCheck" name="passwordCheck" value={passwordCheck} onChange={(event) => setPasswordCheck(event.target.value)} />

        <label htmlFor="email">
          이름
        </label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />

        <label htmlFor="email">
          이메일
        </label>
        <input type="text" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <button type="submit">Submit!</button>
      </form>
      {!success && <div>{error}</div>}
    </div>
  );
}

export default Sign;
