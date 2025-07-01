import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="flex-1 flex items-center justify-center w-full">
      {isLogin ?
        <LoginForm setLogin={setIsLogin} /> :
        <RegisterForm setLogin={setIsLogin} />
      }
    </div>
  )
}

export default AuthPage
