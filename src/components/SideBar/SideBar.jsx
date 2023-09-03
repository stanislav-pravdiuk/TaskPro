import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography, Drawer, Link } from '@mui/material';
import cactus from '../../images/cactus.png';
import cactus2x from '../../images/cactus@2x.png';
import cactus3x from '../../images/cactus@3x.png';
import icon from '../../components/iconSvg/icon.svg';
import {
  SideBarStyled,
  LogoIcon,
  PlusIcon,
  HelpIcon,
  LogoutIcon,
  BoardsContainer,
  BoardsList,
  BoardItem,
  BoardLink,
  IconTitle,
  IconsBox,
  Delete,
  Edit,
  TitleBox,
  Title,
  IconButton,
  IconLink,
} from './Sidebar.styled';
import { useGetBoardsQuery } from 'redux/boards/boardsApi';
import { useLocation, useParams } from 'react-router-dom';

import NewBoardForm from 'components/newBoardForm/NewBoardForm';
import ModalHelp from 'components/ModalHelp/ModalHelp';
import MainModal from 'components/MainModal/MainModal';
import NeedHelpModal from 'components/ModalHelp/ModalHelp';
import sprite from '../iconSvg/icon.svg';

import {
  useAddBoardMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
} from 'redux/boards/boardsApi';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const SideBar = ({ active, onClick }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openHelpModal, setOpenHelpModal] = useState(false);
  const [activeBoardTitle, setActiveBoardTitle] = useState('');
  const [activeBoardIcon, setActiveBoardIcon] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data = [] } = useGetBoardsQuery();

  const location = useLocation();
  const { boardName } = useParams();

  const [addBoard] = useAddBoardMutation();
  const [updateBoard] = useUpdateBoardMutation();
  const [deleteBoard] = useDeleteBoardMutation();
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModalHandler = (boardName, boardIcon) => {
    setActiveBoardTitle(boardName);
    setActiveBoardIcon(boardIcon);
    setOpenEditModal(true);
  };

  const closeAddModal = () => {
    setOpenAddModal(false);
  };

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  const closeHelpModal = () => {
    console.log(openAddModal);
    console.log(openHelpModal);
    setOpenHelpModal(false);
  };

  const handleSubmit = (data, formTitle) => {
    const boardId = boardName;

    if (formTitle === 'New board') {
      addBoard({ data });
      closeAddModal();
      return;
    }

    if (formTitle === 'Edit board') {
      updateBoard({ boardId, data });
      closeEditModal();
      return;
    }
  };

  const deleteBoardHanlder = boardId => {
    deleteBoard({ boardId });
  };

  const drawerContent = (
    <SideBarStyled>
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
            fontFamily: 'Poppins',
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
          fontFamily: 'Poppins',
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
          marginBottom: '40px',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            maxWidth: '92px',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: 0.7,
          }}
        >
          Create a new board
        </Typography>
        <Button
          onClick={() => setOpenAddModal(true)}
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
      <BoardsContainer>
        <BoardsList>
          {data &&
            data.map(board => {
              const isSelected = `/home/${board._id}` === location.pathname;

              return (
                <BoardItem key={board._id}>
                  <BoardLink
                    to={`/home/${board._id}`}
                    state={{ from: location }}
                  >
                    <TitleBox>
                      <IconTitle>
                        <use href={sprite + board.icon}></use>
                      </IconTitle>
                      <Title>{board.title}</Title>
                    </TitleBox>
                  </BoardLink>
                  {isSelected && (
                    <IconsBox>
                      <IconButton
                        type="button"
                        onClick={() =>
                          openEditModalHandler(board.title, board.icon)
                        }
                      >
                        <Edit>
                          <use href={icon + '#icon-pencil-01'}></use>
                        </Edit>
                      </IconButton>
                      <IconLink
                        to={`/home`}
                        onClick={() => deleteBoardHanlder(board._id)}
                        replace
                      >
                        <Delete>
                          <use href={icon + '#icon-trash-04'}></use>
                        </Delete>
                      </IconLink>
                    </IconsBox>
                  )}
                </BoardItem>
              );
            })}
        </BoardsList>
      </BoardsContainer>
      <Box
        sx={{
          backgroundColor: 'rgba(246, 246, 247, 1)',
          marginTop: 'calc(100vh - 585px)',
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
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: 0.7,
              color: 'rgba(22, 22, 22, 1)',
            }}
          >
            If you need help with
            <Link
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.33',
                letterSpacing: 0.7,
                color: 'rgba(190, 219, 176, 1)',
                textDecoration: 'none',
              }}
              onClick={openModal}
            >
              {' '}
              TaskPro
            </Link>
            , check out our support resources or reach out to our customer
            support team.
          </Typography>
        </Box>
        <Button
          onClick={() => setOpenHelpModal(true)}
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
            },
          }}
        >
          <HelpIcon>
            <use href={icon + '#icon-help'}></use>
          </HelpIcon>
          <Typography
            sx={{
              color: 'rgba(22, 22, 22, 1)',
              fontFamily: 'Poppins',
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
        <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
          <NeedHelpModal closeModal={closeModal} />
        </MainModal>
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
          onClick={() => dispatch(logOut())}
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
            },
          }}
        >
          <LogoutIcon>
            <use href={icon + '#icon-login'}></use>
          </LogoutIcon>
          <Typography
            sx={{
              color: 'rgba(22, 22, 22, 1)',
              fontFamily: 'Poppins',
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
    </SideBarStyled>
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
            width: 225,
          },

          '@media (min-width: 768px)': {
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 260,
            },
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
            width: 225,
          },

          '@media (min-width: 768px)': {
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 260,
            },
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
      <MainModal modalIsOpen={openAddModal} closeModal={closeAddModal}>
        <NewBoardForm
          formTitle={'New board'}
          btnText={'Create'}
          handleSubmit={handleSubmit}
        ></NewBoardForm>
      </MainModal>
      <MainModal modalIsOpen={openEditModal} closeModal={closeEditModal}>
        <NewBoardForm
          formTitle={'Edit board'}
          btnText={'Edit'}
          handleSubmit={handleSubmit}
          boardTitle={activeBoardTitle}
          boardIcon={activeBoardIcon}
        ></NewBoardForm>
      </MainModal>
      <MainModal modalIsOpen={openHelpModal} closeModal={closeHelpModal}>
        <ModalHelp />
      </MainModal>
    </Box>
  );
};

export default SideBar;
