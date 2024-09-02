import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    const userIdRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const checkPasswordRef = useRef<HTMLInputElement>(null);
    const nicknameRef = useRef<HTMLInputElement>(null);


    const goToHome = () => {
        navigate('/');
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

  return (
    <div className="w-[400px] h-[600px] mx-auto">
      <h1 className="text-center my-[50px]">회원가입</h1>
      <form className="grid w-[60%] gap-5 mx-auto" onSubmit={onSubmit}>
        <input
          type="text"
          className="border border-black"
          placeholder="아이디"
          ref={userIdRef}
        />
        <input
          type="password"
          className="border border-black"
          placeholder="비밀번호"
          ref={passwordRef}
        />
        <input
          type="password"
          className="border border-black"
          placeholder="비밀번호 재확인"
          ref={checkPasswordRef}
        />
        <input
          type="text"
          className="border border-black"
          placeholder="닉네임"
          ref={nicknameRef}
        />
        <div className="flex mx-auto gap-3">
          <button className="bg-black text-white p-2" onClick={goToHome}>뒤로가기</button>
          <button className="bg-blue-700 text-white p-2">가입하기</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
