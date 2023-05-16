import { Link, Toolbar, Typography } from "@mui/material";

export default function Footer() {
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
      >
        © Integrated by <i>Oscarmac</i>, designed by <i>Nikolay K</i>,{" "}
        {new Date().getFullYear()} - <Link>Do you need help ?</Link>
      </Typography>
    </Toolbar>
  );
}
