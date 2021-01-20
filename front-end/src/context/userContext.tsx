import React ,{createContext, useState} from 'react'
import axios from 'axios'


const userLS = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null


const UserState = createContext({
    userInfo:userLS,
    loginFail:{fail:false},
    loginSuccess:{success:false},
    signUpSuccess:{success:false},
    loginUser: (email:string,password:string) => {},
    signUpUser: (name:string,email:string,password:string) => {},
})

interface Props {
    children:React.ReactNode
}

export const UserProvider = ({children}:Props) => {

    const [userInfo,setUserInfo] = useState({userInfo:userLS})
    const [loginFail,setLoginFail] = useState({fail:false})
    const [loginSuccess,setLoginSuccess] = useState({success:false})

    const [signUpSuccess,setSignUpSuccess] = useState({success:false})


    const loginUser = async (email:string,password:string) => {
     try {
        const {data} = await axios.post('http://localhost:3001/login',{email,password} ,{headers:{'Content-Type':'application/json'}})

        setLoginSuccess({success: true})

        setUserInfo({userInfo:data})

        localStorage.setItem('user', JSON.stringify(data))

        console.log({loginSuccess: loginSuccess.success})

     }catch(error){
        console.error(error)
        setLoginFail({fail:true})
     }
    }

    const signUpUser = async (name:string,email:string,password:string,) => {
        try {
           const {data} = await axios.post('http://localhost:3001/user',{name,email,password} ,{headers:{'Content-Type':'application/json'}})
        
           setSignUpSuccess({success:true})
   
           setUserInfo({userInfo:data})
            console.log(data)
           localStorage.setItem('user', JSON.stringify(data))

       
   
        }catch(error){
           console.error(error)

        }
       }
    
    return (
        <UserState.Provider value={{userInfo,loginFail,loginSuccess,loginUser,signUpUser,signUpSuccess}}>
            {children}
        </UserState.Provider>
    )
}

export default UserState
