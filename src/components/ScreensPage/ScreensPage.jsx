import {
  useGetBoardByIdQuery,
  useAddColumnMutation,
} from 'redux/boards/boardsApi';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import { Container } from './ScreensPage.styled';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardName } = useParams();

  const { data = {}, refetch } = useGetBoardByIdQuery(boardName);

  const [addColumn, result] = useAddColumnMutation();

  console.log(data);

  const addNewColumn = () => {
    const data = { title: 'NewColumn1' };

    const boardId = '64ee053b879ad176a9c27e83';

    addColumn({ boardId, data });
  };

  return (
    <Container>
      <button type="button" onClick={addNewColumn}>
        Add column
      </button>
      <HeaderDashboard boardName={data.title} />
      <MainDashboard columns={data.columns} />
    </Container>
  );
};

export default ScreensPage;
