import { ListItem, ListItemButton, useMediaQuery } from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useBreakpoints } from "@/hooks";
import { listItemButtonStyles, listItemStyles } from "./style";
import { UserAvatar, UserInfo } from "@/components";

export default function AccountModal() {
  const { isSm } = useBreakpoints();
  const imageSrcSet =
    "https://s2.qwant.com/thumbr/0x380/d/c/01adb6443bbe09e66fb6b22749f291c75bbb9a18d3d60fecdb885fe25664da/1625509593529.jpg?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4E03AQE4osjvY8jSdg%2Fprofile-displayphoto-shrink_800_800%2F0%2F1625509593529%3Fe%3D2147483647%26v%3Dbeta%26t%3DH6jbW9N0Aug6cC1vvzTfmKezBDBgsIuh4Py76xDBM_A&q=0&b=1&p=0&a=0";
  const userName = "Oscar M.";

  return (
    <ListItemButton sx={listItemButtonStyles}>
      <ListItem
        disableGutters
        secondaryAction={<KeyboardArrowDownOutlined />}
        sx={listItemStyles}
      >
        {!isSm && <UserAvatar srcSet={imageSrcSet} />}
        <UserInfo primary={!isSm && "User"} secondary={userName} />
      </ListItem>
    </ListItemButton>
  );
}
