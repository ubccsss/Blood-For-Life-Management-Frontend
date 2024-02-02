"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, 
        DialogTitle, FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material';
import './styles/dashboard.css'



/* Event modal */

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create an Event
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email); /* optional for email input for possible notification */
            handleClose();
          },
        }}
      >
        <DialogTitle>Event Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a Blood for Life Event 
          </DialogContentText>
          <TextField
            autoFocus
            required
            id="name"
            margin='normal'
            className="event-name"
            name="name"
            label="Event Name"
            type="string"
            fullWidth
            variant="standard"
          />
        <TextField
            id= "description"
            name= "description"
            className="desc-text"
            label="Description"
            multiline
            margin='normal'
            rows={2}
            variant="outlined"
            fullWidth
            InputLabelProps={{
              sx: { fontSize: '0.95rem' , color: "#b0b4b8"}, // Adjust padding as needed
            }}
        />
        <TextField
            autoFocus
            required
            margin='normal'
            id="location"
            name="location"
            className="location-text"
            label="Event Location"
            type="string"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            required
            margin='normal'
            id="volunteers"
            name="volunteers"
            className="volunteers-text"
            label="Volunteers Required"
            type="number"
            variant="standard"
            style= {{width: "10em"}}
            inputProps={{
              step: 1, 
              min: "0",
              max: "1000"
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}