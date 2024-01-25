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

import {useState} from "react";

export default function SquareMonolithic() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [sideSquare, setSideSquare] = useState(0);
    const [modalContent, setModalContent] = useState('');

    const handleModalContent = (content) => {
        setModalContent(content);

    }
    const handleSideSquare = (number) => {
        setSideSquare(number.target.value)
    }

    function perimeterSquare() {
        let result = 4 * sideSquare;
        handleModalContent(`The perimeter of the square is ${result}`);
        onOpen();
    }

    function areaSquare() {
        let result = sideSquare * sideSquare;
        handleModalContent(`The area of the square is ${result}`);
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
                        alt="NextUI hero Image"
                        src="Square.png"
                    />
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold">
                        What's the side of the square?
                    </p>
                    <div>
                        <Input
                            isClearable
                            type="number"
                            label="Side"
                            variant="bordered"
                            description="Enter the side of the square"
                            onChange={handleSideSquare}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold">
                        What you wanna calculate?
                    </p>
                    <div className=" flex w-full justify-center gap-24">
                        <Button color="primary" onPress={perimeterSquare}>Perimeter</Button>
                        <Button color="primary" onPress={areaSquare}>Area</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}