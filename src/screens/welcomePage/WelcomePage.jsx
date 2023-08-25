import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <>
            <div>
                <nav>
                    <Link to="/auth/login">Log In</Link>
                    <Link to="/auth/register">Registration</Link>
                </nav>
            </div>
        </>
    );
};

export default WelcomePage;