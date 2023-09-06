import { Card, Container, LinkBox, Name, NameBox, Position, Title, UserPhoto } from "./TeamGallery.styled";


function TeamGallery() { 
    return (
        <Container>
            <Title>Our Team</Title>
            <Card>
                <UserPhoto>
                    <img src="../../images/developers/StanislavPravdiuk.jpg"
                    alt=""
                    />
                </UserPhoto>
                <NameBox>
                    <Name>Name</Name>
                    <Position>Position</Position>
                </NameBox>
                <LinkBox>
                    <a href="#">icon or text GitHub</a>
                    <a href="#"> icon or text Telegram</a>
                </LinkBox>
            </Card>
        </Container>
    );
};

export default TeamGallery