import './Login.css'
import Head from '../../components/Header/Header'
import Foot from '../../components/Footer/Footer'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
    return (
        <div>
            <Head />
            <div className='loginFormWrap'>
            <LoginForm />
            </div>
            <Foot />
        </div>
    )
}

export default Login;
