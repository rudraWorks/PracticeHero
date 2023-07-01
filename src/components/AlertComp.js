import {useState} from 'react';
import {Box,Alert,IconButton,Collapse} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export default function AlertComp({message,severity}) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
            severity={severity}
            action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}