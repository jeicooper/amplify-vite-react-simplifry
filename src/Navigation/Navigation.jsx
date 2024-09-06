import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';




function Nav() {
    const navigate = useNavigate();

    function takemeHome() {
        navigate('/home');
    }
    function signOut() {
        navigate('/');
    }
    function dailyReports() {
        navigate('/dailyreports');
    }

    return (
        <div className="Nav">
            <button onClick={takemeHome}>Dashboard</button>
            <button onClick={signOut}>Sign Out</button>
            <button onClick={dailyReports}>Reports</button>
        </div>


    );
}


export default Nav;