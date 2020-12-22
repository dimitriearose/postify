import React,{useState,useContext,} from 'react'
import {Link} from 'react-router-dom'
import validator from 'validator'
import UserState from '../../context/userContext'
import {useHistory} from 'react-router-dom'
import './Signup.scss'


function Signup() {

    const history = useHistory()

    const {signUpUser,signUpSuccess} = useContext(UserState)

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        

        if (name.trim().length > 1 && validator.isEmail(email) && password.trim().length > 6) {
            signUpUser(name,email,password)

            if (signUpSuccess.success){

                history.push('/home')
            }
        }
        
    }

    return (
        <div className='signup'>
            <h1>Sign Up For Postify</h1>
            <form onSubmit={onSubmit} className='signup__form'>
                <div className="signup__form__field">    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'/></div>
                <div className="signup__form__field"> <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/></div>
                <div className="signup__form__field">   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter a Password'/></div>
                <button type='submit' className='signup__button'>Sign Up</button>
                <Link to='/' className="login__link">Already Have an account?</Link>
            </form>
        </div>
    )
}

export default Signup
