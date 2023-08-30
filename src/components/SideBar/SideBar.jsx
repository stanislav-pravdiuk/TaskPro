import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography, Drawer, Link } from '@mui/material';
import cactus from '../../images/cactus.png';
import cactus2x from '../../images/cactus@2x.png';
import cactus3x from '../../images/cactus@3x.png';
import icon from '../../components/iconSvg/icon.svg';
import { LogoIcon, PlusIcon, HelpIcon, LogoutIcon } from './Sidebar.styled';
import { useGetBoardsQuery, useAddBoardMutation } from 'redux/boards/boardsApi';
import { NavLink, useLocation } from 'react-router-dom';
import BtnBoardActive from './btnBoardActive/BtnBoardActive';
import BtnBoard from './btnBoard/BtnBoard';

const SideBar = ({ active, onClick }) => {
  const drawerWidth = 260;

  const { data = []} = useGetBoardsQuery();

  const location = useLocation();
  // const routeName = location.pathname.includes('/:boardName')
  //   ? ''
  //   : ':boardName/';

  const [addBoard] = useAddBoardMutation();

  console.log(data);

  const addNewBoard = () => {
    const data = {
      title: 'New Board3',
    };

    addBoard(data);
  };

  const drawerContent = (
    <Box sx={{ padding: '24px', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '60px',
        }}
      >
        <LogoIcon>
          <use href={icon + '#icon-icon-1'}></use>
        </LogoIcon>
        <Typography
          variant="h2"
          sx={{
            fontSize: '16px',
            letterSpacing: 0.7,
            fontWeight: 600,
            color: '#161616',
          }}
        >
          Task Pro
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: '12px',
          letterSpacing: 0.7,
          fontWeight: 400,
          color: 'rgba(22, 22, 22, 0.5)',
        }}
      >
        My boards
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(22, 22, 22, 0.1)',
          borderTop: '1px solid rgba(22, 22, 22, 0.1)',
          padding: '14px 0',
          marginTop: '8px',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            maxWidth: '76px',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: 0.7,
          }}
        >
          Create a new board
        </Typography>
        <Button
          onClick={addNewBoard}
          sx={{
            backgroundColor: '#BEDBB0',
            padding: '8px 10px',
            minWidth: 0,
            '&:hover': {
              backgroundColor: '#BEDBB0',
              transform: 'scale(1.1)',
            },
          }}
        >
          <PlusIcon>
            <use href={icon + '#icon-plus-2'}></use>
          </PlusIcon>
        </Button>
      </Box>

              {data &&
        data.map(board => {
          return (
            <BtnBoardActive
              // to={`/home/${board._id}`}
              // state={{ from: location }}
              key={board._id}
              title={board.title}
            />
          );
        })}

      {data &&
        data.map(board => {
          return (
            <NavLink
              to={`/home/${board._id}`}
              state={{ from: location }}
              key={board._id}
            >
              <BtnBoard title={board.title}/>
            </NavLink>
          );
        })}


      <Box
        sx={{
          backgroundColor: 'rgba(246, 246, 247, 1)',
          marginTop: 'calc(100vh - 625px)',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            marginBottom: '14px',
          }}
        >
          <picture>
            <source srcSet={`${cactus} 1x, ${cactus2x} 2x, ${cactus3x} 3x`} />
            <img srcSet={`${cactus} 1x`} alt="cactus" />
          </picture>
        </Box>
        <Box
          sx={{
            marginBottom: '18px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: 0.7,
              color: 'rgba(22, 22, 22, 1)',
            }}
          >
            If you need help with
            <Link
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                letterSpacing: 0.7,
                color: 'rgba(190, 219, 176, 1)',
                textDecoration: 'none',
              }}
              href="/#"
            >
              {' '}
              TaskPro
            </Link>
            , check out our support resources or reach out to our customer
            support team.
          </Typography>
        </Box>
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: 0,
            minWidth: 0,
            border: 0,
            '&:hover': {
              backgroundColor: 'inherit',
              border: 0,
              transform: 'scale(1.1)',
            },
          }}
        >
          <HelpIcon>
            <use href={icon + '#icon-help'}></use>
          </HelpIcon>
          <Typography
            sx={{
              color: 'rgba(22, 22, 22, 1)',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '12px',
              letterSpacing: 0.7,
            }}
            variant="body2"
          >
            Need help?
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: '24px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: 0.7,
        }}
      >
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: 0,
            minWidth: 0,
            border: 0,
            '&:hover': {
              backgroundColor: 'inherit',
              border: 0,
              transform: 'scale(1.1)',
            },
          }}
        >
          <LogoutIcon>
            <use href={icon + '#icon-login'}></use>
          </LogoutIcon>
          <Typography
            sx={{
              color: 'rgba(22, 22, 22, 1)',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: 0.7,
            }}
            variant="body2"
          >
            Log out
          </Typography>
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        variant="temporary"
        open={active}
        onClose={onClick}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '@media (min-width: 1440px)': {
            display: { xs: 'block', sm: 'none' },
          },

          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          '@media (max-width: 1439px)': {
            display: 'none',
          },

          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default SideBar;
