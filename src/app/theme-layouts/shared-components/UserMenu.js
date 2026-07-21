import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectUser } from 'app/store/userSlice';
import JwtService from '../../auth/services/jwtService';

function UserMenu(props) {
  const user = useSelector(selectUser);

  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <>
      <Button
        aria-controls={userMenu ? 'account-menu' : undefined}
        aria-expanded={Boolean(userMenu) ? 'true' : undefined}
        aria-haspopup="menu"
        className="min-h-48 rounded-full px-6 py-4 md:pl-12"
        onClick={userMenuClick}
        color="inherit"
      >
        <div className="mr-8 hidden flex-col items-end md:flex">
          <Typography component="span" className="text-base font-bold leading-tight">
            {user.name}
          </Typography>
          <Typography component="span" className="mt-2 text-xs font-medium text-gray-500">
            Administrator
          </Typography>
        </div>

        {user.photo ? (
          <Avatar
            className="h-40 w-40 border-2 border-solid border-white shadow-2"
            alt={`${user.name} profile`}
            src={user.photo}
          />
        ) : (
          <Avatar className="h-40 w-40 bg-indigo-600 text-sm font-bold">{user.name}</Avatar>
        )}
        <FuseSvgIcon className="ml-6 hidden text-gray-400 md:block" size={16}>
          heroicons-outline:chevron-down
        </FuseSvgIcon>
      </Button>

      <Menu
        id="account-menu"
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: {
              width: 292,
              mt: 1,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 3,
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.18)',
            },
          },
        }}
      >
        <Box className="flex items-center gap-12 bg-gray-50 px-20 py-16">
          <Avatar
            alt={`${user.name} profile`}
            src={user.photo}
            sx={{ width: 48, height: 48, border: '2px solid white', boxShadow: 2 }}
          >
            {user.name}
          </Avatar>
          <div className="min-w-0">
            <Typography className="truncate text-base font-extrabold">{user.name}</Typography>
            <Typography className="mt-2 truncate text-sm" color="text.secondary">
              {user.email}
            </Typography>
            <Typography className="mt-6 inline-flex rounded-full bg-indigo-100 px-8 py-2 text-xs font-bold text-indigo-700">
              Administrator
            </Typography>
          </div>
        </Box>

        <Divider />

        <MenuItem className="mx-8 my-6 rounded-8 py-10" onClick={userMenuClose}>
          <ListItemIcon className="min-w-40 text-indigo-600">
            <FuseSvgIcon size={19}>heroicons-outline:user-circle</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="My profile" secondary="Manage your account" />
        </MenuItem>

        <MenuItem
          className="mx-8 mb-8 rounded-8 py-10 text-red-600 hover:bg-red-50"
          onClick={() => {
            userMenuClose();
            JwtService.logout();
          }}
        >
          <ListItemIcon className="min-w-40 text-red-500">
            <FuseSvgIcon size={19}>heroicons-outline:logout</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Sign out" secondary="End this session" />
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
