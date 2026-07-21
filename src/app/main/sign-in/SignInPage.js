import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as yup from 'yup';
import { useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import JwtService from '../../auth/services/jwtService';

const schema = yup.object({
  email: yup.string().email('Enter a valid email address.').required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

const defaultValues = {
  email: '',
  password: '',
};

function SignInPage() {
  const [signInError, setSignInError] = useState('');
  const { control, formState, handleSubmit } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setSignInError('');

    try {
      await JwtService.signInWithCredentials(data);
    } catch (error) {
      setSignInError(error.message);
    }
  };

  return (
    <div className="flex min-w-0 flex-1 items-center justify-center p-16 sm:p-32">
      <Paper className="w-full max-w-400 rounded-8 p-32 shadow sm:p-48">
        <Box className="flex items-center gap-12">
          <Box
            className="flex h-44 w-44 items-center justify-center rounded-8"
            sx={{ backgroundColor: 'secondary.main', color: 'secondary.contrastText' }}
          >
            <FuseSvgIcon size={24}>heroicons-outline:view-grid</FuseSvgIcon>
          </Box>
          <Typography className="text-xl font-bold">Admin Starter</Typography>
        </Box>

        <Typography className="mt-40 text-3xl font-extrabold leading-tight">Sign in</Typography>
        <Typography className="mt-8" color="text.secondary">
          Use your administrator credentials to continue.
        </Typography>

        <form className="mt-32 flex w-full flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="email"
                autoFocus
                className="mb-20"
                error={Boolean(formState.errors.email)}
                fullWidth
                helperText={formState.errors.email?.message}
                label="Email"
                required
                type="email"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="current-password"
                error={Boolean(formState.errors.password)}
                fullWidth
                helperText={formState.errors.password?.message}
                label="Password"
                required
                type="password"
              />
            )}
          />

          {signInError && (
            <Typography className="mt-16" color="error" role="alert">
              {signInError}
            </Typography>
          )}

          <Button className="mt-28" color="secondary" size="large" type="submit" variant="contained">
            Sign in
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignInPage;
