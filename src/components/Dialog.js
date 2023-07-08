import  React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import parser from 'html-react-parser'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({setShowDialog,concepts}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setShowDialog(false)
  };

  return (
    <div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Concepts Learnt
            </Typography>
    
          </Toolbar>
        </AppBar>
        <div style={{padding:'30px'}}>
            {parser(concepts)}
        </div>

      </Dialog>
    </div>
  );
}