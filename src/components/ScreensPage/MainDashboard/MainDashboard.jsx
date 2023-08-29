import AddColumn from "../titleColumn/TitleColumn";
import Card from "../card/Card";
import { Container, Column, GalleryCards } from "./MainDashboard.styled";

const MainDashboard = () => {
    return (
        <Container>
            <Column>
                <AddColumn />
                <GalleryCards>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </GalleryCards>
            </Column>
            <Card />
        </Container>
    );
};

export default MainDashboard;