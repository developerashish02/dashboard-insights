import { useNavigate } from "react-router-dom";
import dashboardLogo from "../../assets/images/dashboard_logo.png";
import "./header.css";

const Header = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        window.localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <header className="header__container">
            <div>
                <img src={dashboardLogo} alt="" className="header_logo" />
            </div>

            <nav className="header_nav">
                <button className="header_btn">Manage Admin</button>
                <button className="header_btn" onClick={handleLogOut}>
                    Logout
                </button>
            </nav>
        </header>
    );
};

export default Header;
