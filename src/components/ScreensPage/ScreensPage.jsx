import { useParams } from "react-router-dom";
import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import MainDashboard from "./MainDashboard/MainDashboard";

const ScreensPage = () => {
    const { boardName } = useParams();

    return (
        <>
            <HeaderDashboard boardName={boardName} />
            <MainDashboard />
        </>
    );
};

export default ScreensPage;