import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../api/requestMethods'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    
    useEffect(() => {
        getAllUsers()
            .then(response => {
                console.log(response.data);
                setUsers(response.data.users);
            })
            .catch(e => {
                console.log(e);
            });
        setIsErrorVisible(false)
    }, [])

    useEffect(() => {
        console.log(isErrorVisible)

    }, [isErrorVisible])

    function handleSubmit() {
        console.log(users)
        users.forEach(user => {
            if (user?.name === name) {
                setIsErrorVisible(true)
            } 
        })
        
    }

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }
    const divStyle = {
        display: "flex",
        flexDirection: "column",
        width: "20rem"
    }
    return (
        <div style={containerStyle}>
            <div style={divStyle}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button onSubmit={handleSubmit}>
                    Login
                </button>
                <div>{isErrorVisible ? 'Invalid login' : ''}</div>
            </div>
        </div>
    )
}