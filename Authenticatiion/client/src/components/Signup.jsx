import React, {useState} from 'react';
import '../App.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Signup = () => {
    const [fname, setFirstname] = useState(" ");
    const [lname, setLastname] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup',{
            fname,
            lname,
            username,
            email,
            password
        }).then(response => {
            console.log(response)
        }).catch(err =>{
            console.log(err)
        })
    };
    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <label htmlFor='fname'>Firstname:</label>
                <input type='text' placeholder='Firstname'
                    onChange={(e) => setFirstname(e.target.value)} />

                <label htmlFor='lname'>Lastname:</label>
                <input type='text' placeholder='Lastname'
                    onChange={(e) => setLastname(e.target.value)} />

                <label htmlFor='username'>Username:</label>
                <input type='text' placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor='email'>Email:</label>
                <input type='email' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password:</label>
                <input type='password' placeholder='*********'
                    onChange={(e) => setPassword(e.target.value)} />

                <button  type='submit'>Signup</button>
            </form>
        </div>
    )
}
export default Signup