import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import React from 'react'

const Rightbar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ]
  return (
    <Box
      //   bgcolor="slategrey"
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box   width="300">
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} >
          <Avatar
            alt="Remy Sharp"
            src="https://yt3.ggpht.com/ytc/AKedOLSWM3H-zbiZZTLrinBj7nSPEcDc_TOuC72NdkZQkw=s900-c-k-c0x00ffffff-no-rj"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.kym-cdn.com/entries/icons/mobile/000/014/133/taylor-swift.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i0.wp.com/abtc.ng/wp-content/uploads/2022/03/Will-Smith-1.jpg?resize=770%2C515&ssl=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.thefamouspeople.com/profiles/images/dua-lipa-2.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.thefamouspeople.com/profiles/images/dua-lipa-2.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList sx={{width:400, heiegth:100, overflowBlock:'auto'}} cols={3} rowHeight={164}>
            {
                itemData.map((item)=>(
                    <ImageListItem key={item.img}>
                        <img width="100" src={`${item.img}?w=164&h=164&fit=crop&auto=format`} />
                    </ImageListItem>
                ))
            }
        </ImageList>
            
          
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{  bgcolor:'Background.paper', width: '100%', maxWidth: 360, overflowX:'scroll', marginBottom:20,overflowClipBox:'content-box' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
