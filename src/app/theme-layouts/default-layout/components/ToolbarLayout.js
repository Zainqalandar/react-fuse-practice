import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import Logo from '../../shared-components/Logo';
import UserMenu from '../../shared-components/UserMenu';

function ToolbarLayout(props) {
  const toolbarTheme = useSelector(selectToolbarTheme);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx('relative z-20 flex border-b-1 shadow-0', props.className)}
        color="default"
        sx={{ backgroundColor: toolbarTheme.palette.background.paper }}
      >
        <Toolbar className="container min-h-56 px-16 sm:px-24">
          <Logo />
          <Button className="ml-24 hidden sm:inline-flex" component={NavLink} to="/dashboard">
            Dashboard
          </Button>
          <div className="flex flex-1" />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout);
