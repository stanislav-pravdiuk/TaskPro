import { useGetBoardByIdQuery } from 'redux/boards/boardsApi';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import { Container } from './ScreensPage.styled';
import { useParams } from 'react-router-dom';
import StartBoard from './startBoard/StartBoard';

const ScreensPage = () => {
  const { boardName } = useParams();
  const { data = {} } = useGetBoardByIdQuery(boardName);

  console.log(data);

  return (
    <Container>
      {boardName ? (
        <>
          <HeaderDashboard boardName={data.title} />
          <MainDashboard columns={data.columns} />
        </>
      ) : (
        <StartBoard />
      )}
    </Container>
  );
};

export default ScreensPage;
