import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';

const ModalHelp = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };

    const handleCommentChange = (event) => {
    setComment(event.target.value);
    };

    const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Comment:', comment);

    handleClose();
    };

    return (
    <div>
        <Button onClick={handleOpen}></Button>
            <Modal open={open} onClose={handleClose}
                fullWidth={true}
            sx={{
                maxWidth: "400px",
                backgroundColor: "#151515",
                borderRadius: "9px",
            }}
            >
        <div className="modal__help">
            <TextField
            label="Email address"
            variant="outlined"
            placeholder='Email address'
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
            />
            <TextField
            label="Comment"
            variant="outlined"
            value={comment}
            onChange={handleCommentChange}
            placeholder='Comment'
            fullWidth
            margin="normal"
            multiline
            rows={4}
            />
            <Button onClick={handleSubmit}
            variant="contained"
            color="success"
            sx={{ backgroundColor: "#BEDBB0" }}>
            Send
            </Button>
        </div>
        </Modal>
    </div>
    );
};

export default ModalHelp;


