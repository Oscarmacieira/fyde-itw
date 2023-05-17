import { useBreakpoints } from "@/hooks";
import { Link, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  const { isSm } = useBreakpoints();
  return (
    <Toolbar
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="overline"
        textTransform={"none"}
        textAlign={"center"}
        component={"div"}
        width={"100%"}
        pt={isSm ? 1 : 0}
        lineHeight={1.5}
      >
        © Integrated by <i>Oscarmac</i>, designed by <i>Nikolay K</i>,{" "}
        {new Date().getFullYear()} - <Link>Do you need help ?</Link>
      </Typography>
    </Toolbar>
  );
}
