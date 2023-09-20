import CategoryList from "../../components/categories/CategoryList/CategoryList.component";
import RecentlyAdded from "../../components/Product/RecentlyAdded/RecentlyAdded.component";

function Home() {
    return (
        <>
            <CategoryList />
            <RecentlyAdded />
        </>

    );
}

export default Home;