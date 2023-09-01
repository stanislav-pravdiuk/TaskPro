import { useState, useEffect } from 'react';
import { useGetBoardByIdQuery } from 'redux/boards/boardsApi';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import StartBoard from './startBoard/StartBoard';

const ScreensPage = () => {
  const { boardName } = useParams();
  const { data = {} } = useGetBoardByIdQuery(boardName);
  const [bgImageDesktop, setBgImageDesktop] = useState(null);
  const [bgImageTablet, setBgImageTablet] = useState(null);
  const [bgImageMobile, setBgImageMobile] = useState(null);

  useEffect(() => {
    if (data.background) {
      setBgImageDesktop(data.background.desktop);
      setBgImageTablet(data.background.tablet);
      setBgImageMobile(data.background.mobile);
    }
  }, [data]);

  const Container = styled.div`
    height: 100vh;
    max-height: 100vh;
    padding: 64px 24px 0 24px;
    margin-left: 260px;

    background-image: url(${bgImageMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-color: #f6f6f7;

    @media screen and (min-width: 768px) {
      background-image: url(${bgImageTablet});
    }

    @media screen and (min-width: 1440px) {
      background-image: url(${bgImageDesktop});
    }
  `;

  return (
    <Container>
      {boardName ? (
        <>
          <HeaderDashboard boardName={data.title} />

          <MainDashboard board={data} columns={data.columns} />
        </>
      ) : (
        <StartBoard />
      )}
    </Container>
  );
};

export default ScreensPage;
