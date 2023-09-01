import { Button, Stack } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateUserTheme } from 'redux/auth/authOperations';

const ThemeForm = () => {
    const dispatch = useDispatch();


   const selectTheme = (e) => {
       console.log(e.target.id);
       dispatch(updateUserTheme({theme: e.target.id}))
}

    return (
      <Stack direction="column" spacing={2}>
            <Button variant="text" id="light" onClick={(e) => selectTheme(e)}>Light</Button>
            <Button variant="text" id="dark" onClick={(e) => selectTheme(e)}>Dark</Button>
            <Button variant="text" id="violet" onClick={(e) => selectTheme(e)}>Violet</Button>
      </Stack>
   
  )
}

export default ThemeForm