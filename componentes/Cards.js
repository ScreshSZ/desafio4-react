import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cards = ({ image, tittle, description, tittleModal, descriptionModal }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Iphone"
        height="300"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" color="error" variant="contained" onClick={handleOpen}>Leer Mas</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {tittleModal}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {descriptionModal}
      </Typography>
    </Box>
    </Modal>
      </CardActions>
    </Card>
    
  )
}

export default Cards