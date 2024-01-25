'use client'
import {
    Image,
    Input,
    Tabs,
    Tab,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure, Code
} from "@nextui-org/react";

import CodeSquareMonolithic from "@/components/CodeSquareMonolithic";

import SquareMonolithic from "@/components/SquareMonolithic";
export default function Home() {
    return (
        <div className="flex h-full w-full flex-col">
            <div>
                <h1 className="text-4xl font-bold text-center m-5">Monolithic</h1>
            </div>
            <div className="flex flex-col items-center h-full ">
                <Tabs aria-label="Options" color="primary" className="">
                    <Tab title="Square" className="flex w-full h-full">
                        <SquareMonolithic/>
                        <div className="flex flex-1 items-center justify-center">
                            <CodeSquareMonolithic/>
                        </div>
                    </Tab>
                    <Tab key="music" title="Circle">
                    </Tab>
                    <Tab key="videos" title="Triangle">
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
