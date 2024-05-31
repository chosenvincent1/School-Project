import LoginForm from "../components/Login/LoginForm"
import LoginImage from "../components/Login/LoginImage"

export default function Login() {
    return (
        <main className="px-[20px] py-[50px] md:p-0 md:flex ">          
            <LoginForm />
            <LoginImage />
        </main>
    ) 
}