import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        // setUsername(prevUsername => )
    }

    return (
        <div className='login-form'>
            <form>
                <h2>Login</h2>
                <div className='login-username'>
                    <label type='text' name='username' id='username'> Username: </label>
                    <input />
                </div>
                <div className='login-password'>
                    <label type='text' name='password' id='username'> Password: </label>
                    <input />
                </div>
                    <input type='submit' value='Login' />
            </form>
        </div>
    )
}





export default Login;