import Image from "next/image";
import { HomeView } from "@/views";
import { MenuNav, ResponsiveDrawer, Sidebar } from "@/components";
import { MENU_NAVIGATION, SIDEBAR_MENUS } from "@/constants/menus";

export default function HomePage() {
  return (
    <ResponsiveDrawer
      menus={SIDEBAR_MENUS}
      subMenus={MENU_NAVIGATION}
      logo={
        <Image src="/logo.png" alt="Logo" width={30} height={30} priority />
      }
    >
      <HomeView />
    </ResponsiveDrawer>
  );
}
