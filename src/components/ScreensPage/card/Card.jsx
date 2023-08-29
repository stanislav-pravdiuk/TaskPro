import { CssBaseline } from "@mui/material";
import { Container, Description, Title } from "./Card.styled";

const Card = () => {
    return (
        <Container>
            <Title>Lorem, ipsum dolor.</Title>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est optio veritatis suscipit iure quas cupiditate.</Description>
            <CssBaseline />
            <div>
                <p>Priority</p>
            </div>
            <div>
                <p>Deadline</p>
            </div>
        </Container>
    );
};

export default Card;