import '../Components/HeroSection.css';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>HealthRise: Get Paid For Your Daily Activities</h1>
                <p className='newp'>Havent You Explored?? Just Get Up From Bed and Explore the Newer Technologies</p>
                <button className="hero-button but2">Get Started</button>
            </div>

            <div className="hero-image">
                <Spline scene="https://prod.spline.design/x9vl2HYYPfBXZZ2i/scene.splinecode" />
            </div>
        </section>
    );
};

export default HeroSection;