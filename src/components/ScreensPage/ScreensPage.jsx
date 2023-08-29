
import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import MainDashboard from "./MainDashboard/MainDashboard";
import { Container } from "./ScreensPage.styled";

const ScreensPage = () => {
    
    const boardName='Название дашборда'

    return (
        <Container>
            <HeaderDashboard boardName={boardName} />
            <MainDashboard />
        </Container>
    );
};

export default ScreensPage;