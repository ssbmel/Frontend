import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/Login');
      }

      const goToSignUp= () => {
        navigate('/signup');
      }

      const goToHome = () => {
        navigate('/');
      }

    
  return (
    <div className="w-full mx-auto text-center grid gap-5 text-[24px]">
        <button onClick={goToHome}>Home</button>
        <button onClick={goToLogin}>Login</button>
        <button onClick={goToSignUp}>SignUp</button>
    </div>
  )
}

export default Home