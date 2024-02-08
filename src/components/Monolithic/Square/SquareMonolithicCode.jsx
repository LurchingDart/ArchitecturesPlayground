import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareMonolithicCode() {
    const codeString = '' +
        '/* Code to get the Area and Perimeter of the Square using the Monolithic Architecture */\n\n' +
        'const {isOpen, onOpen, onOpenChange} = useDisclosure();\n' +
        'const [sideSquare, setSideSquare] = useState(0);\n' +
        'const [modalContent, setModalContent] = useState(\'\');\n' +
        '\n' +
        'const handleModalContent = (content) => {\n' +
        '   setModalContent(content);\n' +
        '\n' +
        '}\n' +
        'const handleSideSquare = (number) => {\n' +
        '   setSideSquare(number.target.value)\n' +
        '}\n' +
        '\n' +
        'function perimeterSquare() {\n' +
        '   let result = 4 * sideSquare;\n' +
        '   handleModalContent(`The perimeter of the square is ${result}`);\n' +
        '   onOpen();\n' +
        '}\n' +
        '\n' +
        'function areaSquare() {\n' +
        '   let result = sideSquare * sideSquare;\n' +
        '   handleModalContent(`The area of the square is ${result}`);\n' +
        '   onOpen();\n' +
        '}';

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