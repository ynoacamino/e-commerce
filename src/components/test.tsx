'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  PersonIcon, EnterIcon, ExitIcon, Pencil2Icon, SunIcon, MoonIcon, DesktopIcon,
} from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

export default function MenubarDemo() {
  const { setTheme } = useTheme();

  return (
    <Menubar className="border-transparent">
      <MenubarMenu>
        <MenubarTrigger>
          <PersonIcon className="font-bold h-[1.5rem] w-[1.5rem]" />
        </MenubarTrigger>
        <MenubarContent align="center">
          <MenubarItem>
            Login
            <MenubarShortcut>
              <EnterIcon className="h-[1.2rem] w-[1.2rem]" />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Register
            <MenubarShortcut>
              <Pencil2Icon className="h-[1.2rem] w-[1.2rem]" />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Log out
            <MenubarShortcut>
              <ExitIcon className="h-[1.2rem] w-[1.2rem]" />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </MenubarTrigger>
        <MenubarContent align="center">
          <MenubarItem onClick={() => setTheme('light')}>
            Light
            <MenubarShortcut>
              <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem onClick={() => setTheme('dark')}>
            Dark
            <MenubarShortcut>
              <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem onClick={() => setTheme('system')}>
            System
            <MenubarShortcut>
              <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
