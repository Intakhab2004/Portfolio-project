import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";


export function DropdownButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 mt-2" align="start">
        <DropdownMenuLabel className="text-lg font-bold text-center">Main Menu</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/" className="font-bold px-2 py-2 border-1 border-blue-600 rounded-md w-full text-center text-md">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about" className="font-bold px-2 py-2 border-1 border-blue-600 rounded-md w-full text-center text-md">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/projects" className="font-bold px-2 py-2 border-1 border-blue-600 rounded-md w-full text-center text-md">Projects</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/skills" className="font-bold px-2 py-2 border-1 border-blue-600 rounded-md w-full text-center text-md">Skills</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact" className="font-bold px-2 py-2 border-1 border-blue-600 rounded-md w-full text-center text-md">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
