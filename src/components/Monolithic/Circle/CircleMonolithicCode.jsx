import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function CircleMonolithicCode() {

    const codeString = '/* Code to get the Area and Perimeter of the Circle using the Monolithic Architecture */\n\n' +
        '    const {isOpen, onOpen, onOpenChange} = useDisclosure();\n' +
        '    const [radius, setRadius] = useState(0);\n' +
        '    const [modalContent, setModalContent] = useState(\'\');\n' +
        '\n' +
        '    const handleModalContent = (content) => {\n' +
        '        setModalContent(content);\n' +
        '\n' +
        '    }\n' +
        '    const handleRadius = (number) => {\n' +
        '        setRadius(number.target.value)\n' +
        '    }\n' +
        '\n' +
        '    function perimeterCircle() {\n' +
        '        let result = 2 * Math.PI * radius;\n' +
        '        handleModalContent(`The perimeter of the circle is ${result}`);\n' +
        '        onOpen();\n' +
        '    }\n' +
        '\n' +
        '    function areaCircle() {\n' +
        '        let result = Math.PI * Math.pow(radius, 2);\n' +
        '        handleModalContent(`The area of the circle is ${result}`);\n' +
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