import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Account from '../../components/account/account';
import UserGreetings from '../../components/userGreetings/userGreetings';
import './user.css'


const user = () => {
    return (
        <div className='user'>
            <div>
                <Header />
            </div>

            <div className='main bg-dark'>

                <UserGreetings />

                <Account
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />
                <Account
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance" />
                <Account
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance" />
            </div>
            <div>
                <Footer />
            </div>

        </div>

    )
}
export default user;