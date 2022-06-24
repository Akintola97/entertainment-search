import * as React from 'react';
import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { img_500, unavailable, unavailableLandscape } from '../assets/config';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EntertainmentModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    );

    setContent(data);



  };
  const fetchVideo = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    );

    console.log(data);

    setVideo(data.result[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, [])




  return (
    <div>
      <Button className='mediaContent' onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           {content && (
           <div className='EntertainmentModal'>
              <img className ='modalImg_portrait' src = {content.poster_path ? `${img_500}/${content.poster_path}`: unavailable} 
              alt ={content.name || content.title} 
              /> 
              

              <img className = 'modalImg_landscape' alt = {content.name || content.title} src = {
                content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape
              } />

              <div className='entertainmentModal_about'>
                <span className = 'entertainmentModal_title'>
                  {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      '----- '
                    )}
                  )
                </span>
              </div>



            </div>
           )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
