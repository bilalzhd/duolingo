import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-ful border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image alt="Croatia Flag" src="/flags/hr.svg" height={32} width={40} className="mr-4 rounded-md" />
                    Croatian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image alt="Spanish Flag" src="/flags/es.svg" height={32} width={40} className="mr-4 rounded-md" />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image alt="Japan Flag" src="/flags/jp.svg" height={32} width={40} className="mr-4 rounded-md" />
                    Japanese
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image alt="Italian Flag" src="/flags/it.svg" height={32} width={40} className="mr-4 rounded-md" />
                    Italian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image alt="Iraq Flag" src="/flags/iq.svg" height={32} width={40} className="mr-4 rounded-md" />
                    Iraqi
                </Button>
            </div>
        </footer>
    )
}