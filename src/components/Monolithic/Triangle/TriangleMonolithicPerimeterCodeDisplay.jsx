import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleMonolithicPerimeterCodeDisplay() {

    const codeString = '' +
        '/* Code to get the Perimeter of the Triangle using the Monolithic Architecture */\n\n' +
        '    const {isOpen, onOpen, onOpenChange} = useDisclosure();\n' +
        '    const [sideTriangle1, setSideTriangle1] = useState(0);\n' +
        '    const [sideTriangle2, setSideTriangle2] = useState(0);\n' +
        '    const [sideTriangle3, setSideTriangle3] = useState(0);\n' +
        '    const [modalContent, setModalContent] = useState(\'\');\n' +
        '\n' +
        '    const handleModalContent = (content) => {\n' +
        '        setModalContent(content);\n' +
        '    }\n' +
        '    const handleSide1 = (number) => {\n' +
        '        setSideTriangle1(number.target.value)\n' +
        '    }\n' +
        '\n' +
        '    const handleSide2 = (number) => {\n' +
        '        setSideTriangle2(number.target.value)\n' +
        '    }\n' +
        '\n' +
        '    const handleSide3 = (number) => {\n' +
        '        setSideTriangle3(number.target.value)\n' +
        '    }\n' +
        '    \n' +
        '    function perimeterTriangle() {\n' +
        '        let result = parseInt(sideTriangle1) + parseInt(sideTriangle2) + parseInt(sideTriangle3);\n' +
        '        handleModalContent(`The perimeter of the triangle is ${result}`);\n' +
        '        onOpen();\n' +
        '    }\n';

    return (
        <SyntaxHighlighter
            language="javascript"
            style={Snazzy}
            className="rounded-2xl p-3 m-5"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}