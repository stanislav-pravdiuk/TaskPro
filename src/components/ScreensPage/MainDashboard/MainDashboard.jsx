import TitleColumn from '../titleColumn/TitleColumn';
import Card from '../card/Card';
import { Container, Column, GalleryCards } from './MainDashboard.styled';
import BtnAdd from '../btnAdd/BtnAdd';

const MainDashboard = ({ columns }) => {
    return (
        <Container>
            {columns &&
                columns.map(column => {
                    return (
                        <Column key={column._id}>
                            <TitleColumn title={column.title} />
                            <GalleryCards>
                                {column.cards.map(card => {
                                    return (
                                        <Card
                                            key={card._id}
                                            title={card.title}
                                            text={card.text}
                                            priority={card.priority}
                                            deadline={card.deadline}
                                        />
                                    );
                                })}
                            </GalleryCards>
                            <BtnAdd />
                        </Column>
                    );
                })}
        </Container>
    );
};

export default MainDashboard;
