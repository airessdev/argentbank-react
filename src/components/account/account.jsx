import './account.css';
import PropTypes from 'prop-types';

const Account = (props) => {
    return (
        <div className='account'>
            <div className='account-content-wrapper'>
                <h3 className='account-title'>{props.title}</h3>
                <p className='account-amount'>{props.amount}</p>
                <p className='account-description'>{props.description}</p>
            </div>
            <div className='account-content-wrapper cta'>
                <button className='transaction-button'>View transactions</button>
            </div>
        </div>
    );
};

Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Account;
