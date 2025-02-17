import data from "../../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function MyPortfolio(){
    return(
        <section id="MyPortfolio" className="portfolio-section">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                   <p className="sub-title"> Recent Projects</p> 
                </div>
                <h2 className="section-heading">
                    My Portfolio
                </h2>
            </div> 
            <div>
               <a href="https://github.com/TGolelelwang" target="_blank" rel="noopener noreferrer">
                   <button className="btn btn-github">
                       <FontAwesomeIcon icon={faGithub} size="xl" /> Visit My GitHub
                   </button> 
               </a>
            </div>
            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => {
                    return (
                        <div key={index} className="portfolio-section-card">
                            <div className="portfolio-section-img">
                                <img src={item.src} alt="Placeholder" /> {/* Corrected 'srs' to 'src' */}
                            </div>
                            <div className="portfolio-section-card-content">
                                <div>
                                    <h3 className="portfolio-section-title">{item.title}</h3>
                                    <p className="text-md">{item.description}</p>
                                </div>
                                <p className="text-sm portfolio-link">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>View Project</a>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div> 
        </section>
    );
}

export default MyPortfolio;
