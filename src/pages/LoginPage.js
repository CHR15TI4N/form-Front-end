import { useState } from 'react';
import './LoginPage.css'

const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passworError, setPasswordError] = useState()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        const passwordValue = event.target.value
        setPassword(passwordValue)

        if (passwordValue.length >= 6) {
            setPasswordError()
        } else {
            setPasswordError("A senha deve conter 6 caracteres")
        }
    }

    const onSubmit = () => {
        console.log(email, password)
    }

    return (
        <div className='container'>
            <div className='formContainer'>
                <input
                    label='E-mail'
                    name='emailInput'
                    value={email}
                    onChange={onChangeEmail}
                />
                <input
                    label='Senha'
                    type='password'
                    name='passwordInput'
                    value={password}
                    onChange={onChangePassword}
                    
                />
                    {
                        passworError ? (
                            <p className='errorMessage'>A senha deve conter pelo menos 6 caracteres</p>
                        ) : <></>
                    }
                <button onClick={onSubmit}> Entrar </button>
            </div>
        </div>
    );
}

export default LoginPage;