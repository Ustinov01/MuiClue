import { Stack, CircularProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
    </Stack>
  );
};
