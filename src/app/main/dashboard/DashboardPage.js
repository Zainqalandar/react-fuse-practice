import { Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FusePageSimple from '@fuse/core/FusePageSimple';

function DashboardPage() {
  return (
    <FusePageSimple
      header={
        <div className="container flex w-full flex-col justify-center px-24 py-20 sm:px-32">
          <Typography className="text-3xl font-extrabold leading-tight">Dashboard</Typography>
          <Typography className="mt-4" color="text.secondary">
            Welcome to your admin workspace.
          </Typography>
        </div>
      }
      content={
        <Box className="container flex w-full p-24 sm:p-32">
          <Paper className="w-full rounded-8 border-1 border-solid p-32 shadow-0" variant="outlined">
            <Typography className="text-xl font-bold">Welcome, Zain Qalandar</Typography>
            <Typography className="mt-8" color="text.secondary">
              Your admin workspace is ready.
            </Typography>
          </Paper>
        </Box>
      }
    />
  );
}

export default DashboardPage;
