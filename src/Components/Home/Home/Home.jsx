import CollegeCards from "../CollegeCards/CollegeCards";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Search from "../Search/Search";


const Home = () => {
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