import { Stack, Skeleton } from "@mui/material";

export const MuiSkeleton = () => {
  return (
    <Stack spacing={2} width="250px">
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton
        variant="rectangular"
        width={250}
        height={140}
        animation="wave"
      />
    </Stack>
  );
};
