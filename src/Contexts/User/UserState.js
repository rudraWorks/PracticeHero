import React, { useEffect, useReducer, useState } from 'react'
import UserContext from './UserContext'

const reducer = (state,action) => {
    switch(action.type){
        case 'LOGIN':{
            localStorage.setItem('user-contester-xxx',JSON.stringify(action.user))
            return action.user
        }
        case 'LOGOUT':{
            localStorage.removeItem('user-contester-xxx')
            return null
        }
        default:return state 
    }
}

function UserState({children}) {
    const [user, dispatch] = useReducer(reducer, null)

    useEffect(()=>{
        const user = localStorage.getItem('user-contester-xxx')
        if(user){
            dispatch({type:'LOGIN',user:JSON.parse(user)})
        }        
    },[])

    return ( 
        <UserContext.Provider value={{user,dispatch}}>{children} </UserContext.Provider>
    )
}
 
export default UserState