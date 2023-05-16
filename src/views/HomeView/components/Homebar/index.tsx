import { useBreakpoints } from "@/hooks";
import { Box, Stack } from "@mui/material";
import { SearchBar } from "@/components";
import TaskTimer from "./components/TaskTimer";
import TaskModal from "./components/TaskModal";
import AccountModal from "./components/AccountModal";
import { DRAWER_WIDTH } from "@/constants/dimensions";

export default function Homebar() {
  const { isSm } = useBreakpoints();
  return (
    <Stack
      gap={isSm ? 1 : 2}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      direction={isSm ? "column" : "row"}
    >
      <SearchBar
        inputBaseProps={{
          placeholder: "Search in CRM…",
        }}
      />
      {!isSm && <Box flexGrow={1} />}

      <Stack
        direction={"row"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        gap={2}
      >
        <TaskTimer />

        <TaskModal />
        <AccountModal />
      </Stack>
    </Stack>
  );
}
