import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Futuristic DevOps Tool</h1>
        <p>Welcome to the future of DevOps automation and efficiency.</p>
      </header>
      <main className="home-main">
        <section className="feature">
          <h2>Automated Deployments</h2>
          <p>Experience seamless and automated deployments with our cutting-edge technology.</p>
        </section>
        <section className="feature">
          <h2>Real-time Monitoring</h2>
          <p>Stay informed with real-time monitoring and alerts for your applications.</p>
        </section>
        <section className="feature">
          <h2>Scalable Infrastructure</h2>
          <p>Scale your infrastructure effortlessly to meet the demands of your business.</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
