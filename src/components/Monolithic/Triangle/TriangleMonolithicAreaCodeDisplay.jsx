import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleMonolithicAreaCodeDisplay() {

    const codeString = '/* Code to get the Area of the Triangle using the Monolithic Architecture */\n\n' +
        '    const {isOpen, onOpen, onOpenChange} = useDisclosure();\n' +
        '    const [heightTriangle, setHeightTriangle] = useState(0);\n' +
        '    const [baseTriangle, setBaseTriangle] = useState(0);\n' +
        '    const [modalContent, setModalContent] = useState(\'\');\n' +
        '\n' +
        '    const handleModalContent = (content) => {\n' +
        '        setModalContent(content);\n' +
        '\n' +
        '    }\n' +
        '    \n' +
        '    const handleHeight = (number) => {\n' +
        '        setHeightTriangle(number.target.value)\n' +
        '    }\n' +
        '\n' +
        '    const handleBase = (number) => {\n' +
        '        setBaseTriangle(number.target.value)\n' +
        '    }\n' +
        '\n' +
        '    function areaTriangle() {\n' +
        '        let result = (baseTriangle * heightTriangle) / 2;\n' +
        '        handleModalContent(`The area of the triangle is ${result}`);\n' +
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