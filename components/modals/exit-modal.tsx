"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useExitModal } from "@/store/use-exit-modal";


export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useExitModal();

    useEffect(() => setIsClient(true), [])

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image src="/mascot_sad.png" alt="Mascot" height={80} width={80} />
                    </div>
                    <DialogTitle className="text-center font-bold">
                        Wait, don&apos;t go
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        You&apos;re about to leave the lesson. Are you sure?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button className="w-full" variant="primary" size="lg" onClick={close}>Keep Learning</Button>
                        <Button className="w-full" variant="dangerOutline" size="lg" onClick={() => {
                            close();
                            router.push("/learn");
                        }}>End Session</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}