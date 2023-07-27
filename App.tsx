import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="header">
                <nav className="nav-links">
                    <a href="#donate-section">Donate</a>
                    <a href="#donation-info-section">Donation Information</a>
                    <a href="#about-us-section">About Us</a>
                    <a href="#contact-us-section">Contact Us</a>
                </nav>
                <TonConnectButton />

            </header>
        <section id="donate-section" className="donate-section">
            <div className="background-image"></div>
            <button className="donate-button">Donate</button>
        </section>

            <section id="donation-info-section" className="donate-info-section">
                <h2>
                    This donation will help:
                </h2>
                <ul>
                    <li>Provide emergency medical supplies to areas affected by natural disasters.</li>
                    <li>Support clean water initiatives in communities facing water scarcity.</li>
                    <li>Deliver food aid to regions suffering from famine or food insecurity.</li>
                    <li>Offer shelter and essential supplies to displaced families during conflicts.</li>
                    <li>Empower education programs for underprivileged children to break the cycle of poverty.</li>
                    <li>Contribute to environmental conservation efforts and reforestation projects.</li>
                    <li>Assist animal rescue organizations in rescuing and rehabilitating animals in need.</li>
                    <li>Support mental health services for communities affected by traumatic events.</li>
                </ul>
            </section>
            <section id="about-us-section" className="about-us-section">
                <p>



                    Welcome to our Mobile Charity platform, powered by TON technology, where you can make a tangible difference with just a few taps on your phone. We believe that every act of kindness, no matter how small, has the potential to transform lives and communities.

                    Our mission is to connect compassionate donors like you with pressing humanitarian causes across the globe. With the secure and transparent TON blockchain, you can rest assured that your contributions are handled with utmost integrity and efficiency.

                    Real-time engagement is at the heart of our charity platform. Through the Telegram app, you can join a vibrant community of like-minded individuals, united by a common goal: to make the world a better place. Stay updated on our latest initiatives, impact stories, and upcoming donation opportunities.

                    Transparency is the foundation of trust. At our Mobile Charity, we are committed to providing full transparency in how your donations are allocated. You have the power to vote on where your contributions go, empowering you to support the causes that resonate with your heart.

                    From providing emergency aid in disaster-stricken regions to supporting education and healthcare initiatives, your generosity fuels hope and transforms lives. Together, we can be a force for good, extending a helping hand to those in need, no matter where they are in the world.

                    Join us on this philanthropic journey and be a part of the positive change we strive to create. Download the Telegram app, connect your wallet, and let's embark on a meaningful mission of compassion and impact.

                    Thank you for being a mobile hero of change with our TON-powered Mobile Charity. Together, we can bring hope, relief, and smiles to countless lives."
                </p>
            </section>
            <section id="contact-us-section" className="contact-us-section">
                <h2>Contact Us</h2>
                <p> Email (Will change after fully launching the TWA): petrovzahar160@gmail.com</p>
            </section>
        </div>


)
}

export default App
