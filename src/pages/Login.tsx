import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const loginIdRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);

  const goToHome = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/signup");
  }

  const getUserData = async () => {
    const response = await fetch("https://moneyfulpublicpolicy.co.kr/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: loginIdRef.current?.value,
        password: loginPasswordRef.current?.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUserData();
    navigate("/");
  };

  return (
    <div className="w-[400px] h-[600px] mx-auto text-center">
      <h1 className="text-center my-[50px]">로그인</h1>
      <form className="grid w-[60%] gap-5 mx-auto" onSubmit={onSubmit}>
        <input
          type="text"
          className="border border-black"
          placeholder="아이디"
          ref={loginIdRef}
        />
        <input
          type="password"
          className="border border-black"
          placeholder="비밀번호"
          ref={loginPasswordRef}
        />
        <div className="flex mx-auto gap-3 my-5">
          <button className="bg-black text-white p-2" onClick={goToHome}>
            뒤로가기
          </button>
          <button className="bg-blue-700 text-white p-2">
            로그인하기
          </button>
        </div>
      </form>
      <div className="grid">
        <button>카카오톡 로그인</button>
        <button className="my-2" onClick={goToSignUp}>회원가입하기</button>
      </div>
    </div>
  );
}

export default Login;
