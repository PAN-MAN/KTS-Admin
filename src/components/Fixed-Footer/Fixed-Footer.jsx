import './Fixed-Footer.css'; // Make sure to create and style this CSS file
import { Link } from 'react-router-dom';
const FixedFooter = () => {
    return (
        <div className="fixed-footer">
            <Link to="/caregiver" className="course-option">Caregiver</Link>
            <Link to="/barista" className="course-option">Barista</Link>
            <Link to="/commercial-cook" className="course-option">Bakery</Link>
            <Link to="/individual-support" className="course-option">Certificate III in Individual Support</Link>
        </div>
    );
}

export default FixedFooter;
