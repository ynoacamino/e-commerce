'use client';

import React from 'react';

import { FaceIcon } from '@radix-ui/react-icons';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

export default function OptionsBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="hidden md:flex">
              Getting started
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/adaw"
                  >
                    <FaceIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <NavigationMenuLink asChild href="/docs" title="Introduction">
                <Link href="/" className='"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"'>
                  <div className="text-sm font-medium leading-none">Re-usable</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild href="/docs" title="Introduction">
                <Link href="/" className='"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"'>
                  <div className="text-sm font-medium leading-none">Re-usable</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild href="/docs" title="Introduction">
                <Link href="/" className='"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"'>
                  <div className="text-sm font-medium leading-none">Re-usable</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
