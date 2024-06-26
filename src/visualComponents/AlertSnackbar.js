import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function AlertSnackbar({message, open, setOpen, severity}) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}