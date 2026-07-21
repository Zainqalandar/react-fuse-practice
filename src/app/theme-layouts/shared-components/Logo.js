import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function Logo() {
  return (
    <Box className="flex items-center gap-10" aria-label="Admin Starter">
      <FuseSvgIcon size={28}>heroicons-outline:view-grid</FuseSvgIcon>
      <Typography className="text-lg font-bold">Admin Starter</Typography>
    </Box>
  );
}

export default Logo;
