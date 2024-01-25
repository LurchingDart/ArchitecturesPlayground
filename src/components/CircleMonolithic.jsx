'use client'
import {
    Image,
    Input,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

import {useState} from "react";

export default function CircleMonolithic() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [radius, setRadius] = useState(0);
    const [modalContent, setModalContent] = useState('');

    const handleModalContent = (content) => {
        setModalContent(content);

    }
    const handleRadius = (number) => {
        setRadius(number.target.value)
    }

    function perimeterCircle() {
        let result = 2 * Math.PI * radius;
        handleModalContent(`The perimeter of the circle is ${result}`);
        onOpen();
    }

    function areaCircle() {
        let result = Math.PI * Math.pow(radius, 2);
        handleModalContent(`The area of the circle is ${result}`);
        onOpen();
    }

    return (
        <div className="flex flex-1">
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center">Results</ModalHeader>
                            <ModalBody className="text-center">
                                <p>
                                    {modalContent}
                                </p>
                            </ModalBody>
                            <ModalFooter className="flex justify-center">
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div className="flex flex-1 flex-col items-center justify-around">
                <div>
                    <Image
                        width={400}
                        alt="Circle figure"
                        src="https://i.imgur.com/0BoSQdL.png"
                    />
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        What's the radius of the circle?
                    </p>
                    <div>
                        <Input
                            isClearable
                            type="number"
                            label="Radius"
                            variant="bordered"
                            description="Enter the radius of the circle"
                            onChange={handleRadius}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold">
                        What you wanna calculate?
                    </p>
                    <div className=" flex w-full justify-center gap-24">
                        <Button color="primary" onPress={perimeterCircle}>Perimeter</Button>
                        <Button color="primary" onPress={areaCircle}>Area</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}