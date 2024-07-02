
import React from 'react';
import './Middle.css';
import back from '../../assets/bank-tree.jpeg';
import chat from '../../assets/icon-chat.png';
import money from '../../assets/icon-money.png';
import security from '../../assets/icon-security.png';
import Feature from '../feature/Feature';

const myStyle = {
  backgroundImage: `url(${back})`,
  height: "420px",
  backgroundPosition: "0 -200px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

const Middle = () => {
  return (
    <main>
      <div className="hero" style={myStyle}>
        <section className="hero-content">

          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">

        <Feature
          img={chat}
          alt='chatting icon'
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          img={money}
          alt="money icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          img={security}
          alt='shield icon'
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
};

export default Middle;

