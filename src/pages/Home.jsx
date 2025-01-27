import { useRouteError } from "react-router-dom";

const Home = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <h1>Home page</h1>
    )
}
export default Home;