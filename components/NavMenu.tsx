'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export interface NavItem {
  text: string
  href: string
}

interface MobileMenuProps {
  navItems: NavItem[]
  children?: React.ReactNode
}

export function MobileMenu({ navItems, children }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          {children || <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-rose-700 border-black">
        <SheetHeader>
          <Link
            href='/'
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}>
            <SheetTitle>熙歌工作室</SheetTitle>
          </Link>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}>
              {item.text}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
