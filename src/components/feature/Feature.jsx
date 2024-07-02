import './Feature.css';
import PropTypes from 'prop-types';

const Feature = (props) => {
    return (
        <div className="feature">
            <div className='feature-item'>
                <img src={props.img} alt={props.alt} className="feature-icon" />
                <h3 className="feature-item-title">{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

Feature.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Feature;
