import React,{useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SnackbarComp({message,setShowSnack}) {

  const [open, setOpen] = useState(true); 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnack(null) 
    setOpen(false);
  }; 

  return (
   
      <Snackbar
        open={open}
        autoHideDuration={1600}
        onClose={handleClose}
  
        message={message}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />

  );
}