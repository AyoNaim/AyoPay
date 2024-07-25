'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { sidebarLinks } from "@/constants"

export function Modal() {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src={'./hamburger.svg'} alt="hamburger" width={30} height={30} />
      </SheetTrigger>
      <SheetContent>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[34px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Ayo pay</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('mobilenav-sheet_close w-full hover:bg-blue-200', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-5">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p>
                {item.label}
              </p>
            </Link>
          )
        })}
        
      </nav>
      </SheetContent>
    </Sheet>
  )
}
