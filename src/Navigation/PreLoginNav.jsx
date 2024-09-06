import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css'





function PreLoginNav() {
    const navigate = useNavigate();

    function takemeHome() {
        navigate('/');
    }
    function signMeUp() {
        navigate('/signup');
    }
    function LoginScreen() {
        navigate('/login');
    }

    return (
        <div className="Nav">
            <button onClick={takemeHome}>Home</button>            
            <button onClick={LoginScreen}>Login</button>

        </div>


    );
}
export default PreLoginNav;