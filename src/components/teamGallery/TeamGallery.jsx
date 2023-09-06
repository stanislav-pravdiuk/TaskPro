import { Card, Container, LinkBox, NameBox, Title, UserPhoto } from "./TeamGallery.styled";


function TeamGallery() { 
    return (
        <Container>
            <Title>Our Team</Title>
            <Card>
                <UserPhoto>
                    <img src="" alt="" />
                </UserPhoto>
                <NameBox>
                    <h3>Name</h3>
                    <p>Position</p>
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