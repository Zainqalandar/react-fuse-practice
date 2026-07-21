import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Hidden({ children, lgDown = false, lgUp = false }) {
  const theme = useTheme();
  const isLgOrLarger = useMediaQuery(theme.breakpoints.up('lg'));
  const isLgOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

  if ((lgUp && isLgOrLarger) || (lgDown && isLgOrSmaller)) {
    return null;
  }

  return children;
}

export default Hidden;
