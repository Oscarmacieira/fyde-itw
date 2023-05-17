import { useBreakpoints } from "@/hooks";
import { Link, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  const { isSm } = useBreakpoints();
  return (
    <Toolbar
      sx={{
        width: "100%",
        mx: "auto",
        pb: 2,
        pt: isSm ? 2 : 0,
      }}
    >
      <Typography
        variant="overline"
        textTransform={"none"}
        textAlign={"center"}
        component={"div"}
        width={"100%"}
        pt={0}
        lineHeight={1.5}
      >
        © Integrated by <i>Oscarmac</i>, designed by <i>Nikolay K</i>,{" "}
        {new Date().getFullYear()} <Link>Do you need help ?</Link>
      </Typography>
    </Toolbar>
  );
}
