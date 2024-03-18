'use client';

import React from 'react';

import { ArchiveIcon } from '@radix-ui/react-icons';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

import { Category } from '@prisma/client';

export default function OptionsBar({ categorys }: { categorys: Category[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="hidden md:flex">
              Categorias
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 gap-3 p-6 md:w-[400px]">
              {
                categorys.map(({ category_description, category_name }) => (
                  <NavigationMenuLink asChild title="Introduction" key={crypto.randomUUID()}>
                    <Link href="/productos" className='"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex gap-4 items-center justify-center"'>
                      <ArchiveIcon className="w-10 h-10" />
                      <div>
                        <div className="text-sm font-medium leading-none">{category_name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {category_description}
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))
              }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/productos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Ver todos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
