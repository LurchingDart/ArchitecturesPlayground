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
import axios from "axios";

export default function SquareClientServer() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [sideSquare, setSideSquare] = useState(0);
    const [modalContent, setModalContent] = useState('');

    const handleModalContent = (content) => {
        setModalContent(content);

    }
    const handleSideSquare = (number) => {
        setSideSquare(number.target.value)
    }

    const perimeterSquare = async () => {
        try {
            const response = await axios.get(`https://architectures-clientserver.vercel.app/square/perimeter/${sideSquare}`);
            handleModalContent(`The perimeter of the square is ${response.data.perimeter}`);
            onOpen();
        } catch (error) {
            console.error(error);
        }
    }

    const areaSquare = async () => {
        try {
            const response = await axios.get(`https://architectures-clientserver.vercel.app/square/area/${sideSquare}`);
            handleModalContent(`The area of the square is ${response.data.area}`);
            onOpen();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-1">
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size={"xs"}
                placement={"center"}
                backdrop={"blur"}
            >
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
            <div className="flex flex-1 flex-col items-center gap-6">
                <div className="xlg:hidden">
                    <Image
                        width={300}
                        alt="Square image"
                        src="https://i.imgur.com/LKTtqQm.png"
                    />
                </div>
                <div className="hidden mt-5 xlg:flex">
                    <Image
                        width={350}
                        alt="Square image"
                        src="https://i.imgur.com/LKTtqQm.png"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
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
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-center">
                        What you wanna calculate?
                    </p>
                    <div className=" flex gap-24">
                        <Button color="primary" onPress={perimeterSquare}>Perimeter</Button>
                        <Button color="primary" onPress={areaSquare}>Area</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}