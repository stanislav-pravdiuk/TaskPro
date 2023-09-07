import StartBoard from './startBoard/StartBoard';
import HeaderDashboard from './headerDashboard/HeaderDashboard';
import MainDashboard from './mainDashboard/MainDashboard';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { useGetBoardByIdQuery } from 'redux/boards/boardsApi';

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

  const theme = useTheme();

  const Container = styled.div`
    height: 100vh;
    max-height: 100%;
    background-image: url(${bgImageMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-color: ${props => {
      return props.theme.palette.primary.darker;
    }};

    @media screen and (min-width: 768px) {
      background-image: url(${bgImageTablet});
    }

    @media screen and (min-width: 1440px) {
      background-image: url(${bgImageDesktop});
      padding: 0 0 0 260px;
    }

    ::-webkit-scrollbar {
      background-color: ${theme.palette.background.warning};
      width: 8px;
      border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.palette.background.info};
      border-radius: 12px;
    }
  `;

  return (
    <Container theme={theme}>
      {boardName ? (
        <>
          <HeaderDashboard boardName={data.title} filterValue={data.filter} />

          <MainDashboard board={data} columns={data.columns} />
        </>
      ) : (
        <StartBoard />
      )}
    </Container>
  );
};

export default ScreensPage;