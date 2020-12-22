import React,{useState,useContext} from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import UserState from '../../context/userContext'
import {useHistory} from 'react-router-dom'
import './Login.scss'

function Login() {

    const history = useHistory()

    const {loginUser,loginFail,loginSuccess} = useContext(UserState)

    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (validator.isEmail(email) && password.trim().length > 6) {
            loginUser(email,password)

            if (loginSuccess.success) {
                setEmail('')
        setPassword('')
             
            }
        }

        
        
    }

    return (
        <div className='login'>
            <h1>Login to your Postify</h1>
            <form onSubmit={onSubmit} className='login__form'>
                {/* {loginFail.fail && 'Error Occured'} 
                {loginSuccess.success && 'Logged In'}  */}
                <div className="login__form__field">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
                    </div>
                <div className="login__form__field">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter a Password'/>
                </div>
                <button className='login__button' type='submit'>Login</button>
                <Link to='/signup' className="login__link">New to Postify ? </Link>
            </form>
        </div>
    )
}

export default Login
