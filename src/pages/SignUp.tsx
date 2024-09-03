import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [passwordError, setPasswordError] = useState<string>();

  const addUser = async () => {
    const response = await fetch("https://moneyfulpublicpolicy.co.kr/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: userIdRef.current?.value,
        password: passwordRef.current?.value,
        nickname: nicknameRef.current?.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const goToHome = () => {
    navigate("/");
  };

  const enforcePositiveValue = (
    e: React.FormEvent<HTMLInputElement>,
    setError: (msg: string) => void
  ) => {
    const input = e.currentTarget;
    const cleanedValue = input.value.replace(/[^0-9.]/g, "");
    if (passwordRef.current?.value !== checkPasswordRef.current?.value) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("");
      input.value = cleanedValue;
    }
  };

  const handlePasswordInput: React.FormEventHandler<HTMLInputElement> = (e) => {
    enforcePositiveValue(e, setPasswordError);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current?.value !== checkPasswordRef.current?.value) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }
    if (userIdRef.current?.value.length && userIdRef.current.value.length < 3) {
      alert("4글자 이상의 문자열이어야 합니다.");
      return;
    }
    addUser();
    navigate("/login")
  };

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
          onInput={handlePasswordInput}
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        <input
          type="text"
          className="border border-black"
          placeholder="닉네임"
          ref={nicknameRef}
        />
        <div className="flex mx-auto gap-3">
          <button className="bg-black text-white p-2" onClick={goToHome}>
            뒤로가기
          </button>
          <button className="bg-blue-700 text-white p-2">가입하기</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
