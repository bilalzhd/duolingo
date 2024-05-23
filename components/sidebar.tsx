import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string
}
export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex lg:fixed lg:w-[256px] h-full left-0 top-0 px-4 border-r-2 flex-col", className)}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.png" height={40} width={40} alt="Logo Mascot" />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Learn" href="/learn" iconSrc="/house.png" />
                <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.png" />
                <SidebarItem label="Quests" href="/quests" iconSrc="/quest.png" />
                <SidebarItem label="Shop" href="/shop" iconSrc="/shop.png" />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="text-muted-foreground animate-spin h-5 w-5" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}
