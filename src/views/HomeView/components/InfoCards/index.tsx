import { InfoCard } from "@/components";
import { useBreakpoints } from "@/hooks";
import { Grid } from "@mui/material";

const infoCards = [
  {
    primary: "Yours & total time",
    secondary: "03:09",
    third: "05:21",
    sign: "h",
  },
  {
    primary: "Yours & total earnings",
    secondary: "1,695.00",
    third: "4,695.00",
    sign: "$",
  },
  {
    primary: "Yours & total time",
    secondary: "34%",
    third: "34/100",
    sign: "%",
  },
];

export default function InfoCards() {
  const { isSm } = useBreakpoints();
  return (
    <Grid
      container
      gap={isSm ? 2 : 2}
      py={4}
      columns={10}
      display={"flex"}
      width={"100%"}
    >
      {infoCards.map((card, index) => (
        <Grid
          item
          xs={10}
          sm={10}
          md={3}
          lg={3}
          xl={3}
          key={index}
          width={"100%"}
          mx="auto"
        >
          <InfoCard
            primary={card.primary}
            secondary={card.secondary}
            third={card.third}
            sign={card.sign as unknown as "h" | "$" | "%"}
          />
        </Grid>
      ))}
    </Grid>
  );
}
