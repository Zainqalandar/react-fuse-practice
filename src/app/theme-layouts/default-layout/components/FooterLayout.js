import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';

function FooterLayout(props) {
    const footerTheme = useSelector(selectFooterTheme);
    // doItLaterComment:
    if (1) {
        return null;
    }
    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar
                id="fuse-footer"
                className={clsx('relative z-20 shadow-md', props.className)}
                color="default"
                sx={{ backgroundColor: footerTheme.palette.background.paper }}
            >
                <Toolbar className="container flex min-h-48 items-center overflow-x-auto px-8 py-0 sm:px-12 md:min-h-64">
                    Footer
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default memo(FooterLayout);
