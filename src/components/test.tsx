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

import { DialogTrigger } from '@/components/ui/dialog';

import {
  PersonIcon, EnterIcon, ExitIcon, SunIcon, MoonIcon, DesktopIcon,
} from '@radix-ui/react-icons';
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Login from './Login';

export default function MenubarDemo() {
  const { setTheme } = useTheme();
  const { data, status } = useSession();

  return (
    <Login>
      <Menubar className="border-transparent">
        <MenubarMenu>
          <MenubarTrigger className={`${status === 'authenticated' && 'py-1'}`}>
            {
            status === 'authenticated' && data?.user?.image
              ? (
                <Image
                  src={data?.user?.image}
                  alt="profile"
                  className="w-[2rem] h-[2rem] rounded-md"
                  width={30}
                  height={30}
                />
              )
              : <PersonIcon className="font-bold h-[1.5rem] w-[1.5rem]" />
          }
          </MenubarTrigger>
          <MenubarContent align="center">
            <DialogTrigger asChild disabled={status === 'authenticated'}>
              <MenubarItem disabled={status === 'authenticated'}>
                Login
                <MenubarShortcut>
                  <EnterIcon className="h-[1.2rem] w-[1.2rem]" />
                </MenubarShortcut>
              </MenubarItem>
            </DialogTrigger>
            <MenubarSeparator />
            <MenubarItem onClick={() => signOut()} disabled={status === 'unauthenticated'}>
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
            <span className="sr-only">Escoge el tema</span>
          </MenubarTrigger>
          <MenubarContent align="center">
            <MenubarItem onClick={() => setTheme('light')}>
              Claro
              <MenubarShortcut>
                <SunIcon className="h-[1.2rem] w-[1.2rem]" />
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={() => setTheme('dark')}>
              Oscuro
              <MenubarShortcut>
                <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={() => setTheme('system')}>
              Sistema
              <MenubarShortcut>
                <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Login>
  );
}
