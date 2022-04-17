import { Mail, Notifications, Pets } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'ivory',
  color: 'slategrey',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{
      display:"flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  cursor:'pointer',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{
    display:"none"
}
}))
const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="16" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Navbar
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          {' '}
          <InputBase placeholder="search" />{' '}
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://bit.ly/3M8z5NP"
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://bit.ly/3M8z5NP"
          />
          <Typography variant='span'>Tom</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
