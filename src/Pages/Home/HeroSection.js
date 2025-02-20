import { Link as ScrollLink } from 'react-scroll';
function HeroSection(){

    return(

        <section id ="heroSection" className ="hero-section">
            <div className = "hero-section-content-box">
                <div className ="hero-section-content">
                    <p className ="section-title">
                        Hello, my name is Tlotlo Golelelwang
                    </p>
                    <h1 className ="hero-section-title">
                        <span className ="hero-section-title-color">
                            Aspiring Data Analyst
                        </span>{" "}
                    </h1>
                    <p className ="hero-section-description">
                    
                       Let me tell your story. By delving, sorting, cleaning and visualizing data I get to find out all the facts about the story that lies within your organization. 
                        <br/>
                        Explore my page, find out more about me and what I have to offer.
                    
                    </p>
                </div>
            
                <ScrollLink
                    className="btn btn-primary"
                    to="MyPortfolio"  // Scroll to this section
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Explore
                </ScrollLink>
                </div>
                <div className="hero-section-img">
                    <img src ="./img/Profile_Image.jpg" alt="Profile picture of Tlotlo"/>
                </div>
        </section>

    )

}

export default HeroSection

