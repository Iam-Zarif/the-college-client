import Title from "../../../Title/Title";
import CollegeCards from "../CollegeCards/CollegeCards";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Search from "../Search/Search";


const Home = () => {
    Title("DEGREE CAMP | HOME");
    return (
        <div>
            <Search></Search>
            <CollegeCards></CollegeCards>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;