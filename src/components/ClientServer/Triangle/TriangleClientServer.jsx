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
    useDisclosure,
} from "@nextui-org/react";

import {useState} from "react";

export default function TriangleClientServer( { setSelectedOption } ) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [sideTriangle1, setSideTriangle1] = useState(0);
    const [sideTriangle2, setSideTriangle2] = useState(0);
    const [sideTriangle3, setSideTriangle3] = useState(0);
    const [heightTriangle, setHeightTriangle] = useState(0);
    const [baseTriangle, setBaseTriangle] = useState(0);
    const [modalContent, setModalContent] = useState('');

    const handleModalContent = (content) => {
        setModalContent(content);

    }
    const handleSide1 = (number) => {
        setSideTriangle1(number.target.value)
    }

    const handleSide2 = (number) => {
        setSideTriangle2(number.target.value)
    }

    const handleSide3 = (number) => {
        setSideTriangle3(number.target.value)
    }

    const handleHeight = (number) => {
        setHeightTriangle(number.target.value)
    }

    const handleBase = (number) => {
        setBaseTriangle(number.target.value)
    }

    function perimeterTriangle() {
        let result = parseInt(sideTriangle1) + parseInt(sideTriangle2) + parseInt(sideTriangle3);
        handleModalContent(`The perimeter of the triangle is ${result}`);
        onOpen();
    }

    function areaTriangle() {
        let result = (baseTriangle * heightTriangle) / 2;
        handleModalContent(`The area of the triangle is ${result}`);
        onOpen();
    }

    const handleTabChange = (key) => {
        setSelectedOption(key);
    };

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
                        alt="Triangle figure"
                        src="https://i.imgur.com/pjjXuHq.png"
                    />
                </div>
                <div className="hidden mt-5 xlg:flex">
                    <Image
                        width={350}
                        alt="Triangle figure"
                        src="https://i.imgur.com/pjjXuHq.png"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Tabs aria-label="Options" color="primary" onSelectionChange={(key) => handleTabChange(key)}>
                        <Tab
                            key="area"
                            title="Area"
                            className="flex flex-col gap-6"
                        >
                            <p className="font-bold text-center">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                What's the base and height of the triangle?
                            </p>
                            <div className="flex gap-2">
                                <Input
                                    isClearable
                                    type="number"
                                    label="Height"
                                    variant="bordered"
                                    description="Enter the height of the triangle"
                                    onChange={handleHeight}
                                />
                                <Input
                                    isClearable
                                    type="number"
                                    label="Base"
                                    variant="bordered"
                                    description="Enter the base of the triangle"
                                    onChange={handleBase}
                                />
                            </div>
                            <div className=" flex justify-center">
                                <Button color="primary" onPress={areaTriangle}>Calculate</Button>
                            </div>
                        </Tab>
                        <Tab
                            key="perimeter"
                            title="Perimeter"
                            className="flex flex-col gap-6"
                        >
                            <p className="font-bold text-center">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                What are the sides of the triangle?
                            </p>
                            <div className="flex gap-2">
                                <Input
                                    isClearable
                                    type="number"
                                    label="Side 1"
                                    variant="bordered"
                                    description="Enter the side 1 of the triangle"
                                    onChange={handleSide1}
                                />
                                <Input
                                    isClearable
                                    type="number"
                                    label="Side 2"
                                    variant="bordered"
                                    description="Enter the side 2 of the triangle"
                                    onChange={handleSide2}
                                />
                                <Input
                                    isClearable
                                    type="number"
                                    label="Side 3"
                                    variant="bordered"
                                    description="Enter the side 3 of the triangle"
                                    onChange={handleSide3}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Button color="primary" onPress={perimeterTriangle}>Calculate</Button>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}