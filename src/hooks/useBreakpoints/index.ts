import { Theme, useMediaQuery } from "@mui/material";

const useBreakpoints = () => {
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  return { isSm, isMd, isLg, isXl };
};

export default useBreakpoints;
