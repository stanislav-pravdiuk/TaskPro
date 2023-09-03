import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Drawer } from '@mui/material';
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
  LogoText,
  Subtitle,
  Wrap,
  LogoWrap,
  Text,
  PlusButton,
  HelpWrap,
  ImgWrap,
  TextWrap,
  HelpText,
  HelpTextLink,
  HelpButton,
  HelpTitle,
  LogoutWrap,
  LogoutButton,
  LogoutText,
} from './Sidebar.styled';
import { useGetBoardsQuery } from 'redux/boards/boardsApi';
import { useLocation, useParams } from 'react-router-dom';

import NewBoardForm from 'components/newBoardForm/NewBoardForm';
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
      <LogoWrap>
        <LogoIcon>
          <use href={icon + '#icon-icon-1'}></use>
        </LogoIcon>
        <LogoText component="h1">Task Pro</LogoText>
      </LogoWrap>
      <Subtitle variant="subtitle1">My boards</Subtitle>
      <Wrap>
        <Text variant="body2">Create a new board</Text>
        <PlusButton onClick={() => setOpenAddModal(true)}>
          <PlusIcon>
            <use href={icon + '#icon-plus-2'}></use>
          </PlusIcon>
        </PlusButton>
      </Wrap>
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
      <HelpWrap>
        <ImgWrap>
          <picture>
            <source srcSet={`${cactus} 1x, ${cactus2x} 2x, ${cactus3x} 3x`} />
            <img srcSet={`${cactus} 1x`} alt="cactus" />
          </picture>
        </ImgWrap>
        <TextWrap>
          <HelpText variant="body2">
            If you need help with
            <HelpTextLink onClick={openModal}> TaskPro</HelpTextLink>, check out
            our support resources or reach out to our customer support team.
          </HelpText>
        </TextWrap>
        <HelpButton onClick={openModal}>
          <HelpIcon>
            <use href={icon + '#icon-help'}></use>
          </HelpIcon>
          <HelpTitle variant="body2">Need help?</HelpTitle>
        </HelpButton>
      </HelpWrap>
      <LogoutWrap>
        <LogoutButton onClick={() => dispatch(logOut())}>
          <LogoutIcon>
            <use href={icon + '#icon-login'}></use>
          </LogoutIcon>
          <LogoutText variant="body2">Log out</LogoutText>
        </LogoutButton>
      </LogoutWrap>
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
      <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
        <NeedHelpModal closeModal={closeModal} />
      </MainModal>
    </Box>
  );
};

export default SideBar;
