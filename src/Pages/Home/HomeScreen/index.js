import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

function Home (){

    return(
            <>
            <HeroSection/>
            <MySkills/>
            <AboutMe/>
            <MyPortfolio/>
            <ContactMe/>
            </>
    )

}

export default Home