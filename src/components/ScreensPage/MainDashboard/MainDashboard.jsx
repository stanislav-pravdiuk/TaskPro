import TitleColumn from "../titleColumn/TitleColumn";
import Card from "../card/Card";
import { Container, Column, GalleryCards} from "./MainDashboard.styled";
import BtnAdd from "../btnAdd/BtnAdd";

const MainDashboard = () => {

    return (
        <Container>
            <Column>
                <TitleColumn />
                <GalleryCards>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </GalleryCards>
                <BtnAdd />
            </Column>
            <Column>
                <BtnAdd />
            </Column>
            
        </Container>
    );
};

export default MainDashboard;