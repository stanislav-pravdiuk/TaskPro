import { useGetBoardByIdQuery } from 'redux/boards/boardsApi';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import { Container } from './ScreensPage.styled';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardName } = useParams();
  const { data = {} } = useGetBoardByIdQuery(boardName);

  return (
    <Container>
      <HeaderDashboard boardName={data.title} />
      <MainDashboard columns={data.columns} />
    </Container>
  );
};

export default ScreensPage;
