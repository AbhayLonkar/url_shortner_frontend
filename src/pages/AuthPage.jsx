import {useState} from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div
            className="flex flex-wrap items-center justify-center w-full min-h-screen h-auto md:flex-row flex-col bg-saffron-800 py-3 gap-2 bg-[url(/images/bg.png)] bg-center">
            <div
                className={'flex md:justify-center items-center  max-w-lg  h-100 p-3'}>
                <img src={'/images/login.png'} alt={'link-it'} className={'w-auto  object-cover'}/>
            </div>
            <div className={'md:py-3 p-2 md:mb-0 mb-20'}>
                {isLogin ?
                    <LoginForm setLogin={setIsLogin}/> :
                    <RegisterForm setLogin={setIsLogin}/>
                }
            </div>

        </div>
    )
}

export default AuthPage
