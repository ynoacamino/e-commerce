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
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Alert Dialog',
      href: '/',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description:
        'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
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
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map(() => (
                <NavigationMenuLink asChild href="/docs" title="Introduction" key={crypto.randomUUID()}>
                  <Link href="/" className='"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"'>
                    <div className="text-sm font-medium leading-none">Re-usable</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
