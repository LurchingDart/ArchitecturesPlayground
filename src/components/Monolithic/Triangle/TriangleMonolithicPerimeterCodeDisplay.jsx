import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';

export default function TriangleMonolithicPerimeterCodeDisplay() {

    const Snazzy = {
        'hljs': {
            'backgroundColor': '#282a36',
            'color': '#eff0eb',
            // Agrega más estilos según sea necesario
        },
        'hljs-comment': { 'color': '#686868' },
        'hljs-quote': { 'color': '#686868' },
        'hljs-variable': { 'color': '#ff5c57' },
        'hljs-template-variable': { 'color': '#ff5c57' },
        'hljs-attribute': { 'color': '#ff5c57' },
        'hljs-tag': { 'color': '#EFDDFC' },
        'hljs-name': { 'color': '#DDBDFA' },
        'hljs-regexp': { 'color': '#ff5c57' },
        'hljs-link': { 'color': '#ff5c57' },
        'hljs-selector-id': { 'color': '#ff5c57' },
        'hljs-selector-class': { 'color': '#ff5c57' },
        'hljs-number': { 'color': '#5af78e' },
        'hljs-meta': { 'color': '#5af78e' },
        'hljs-built_in': { 'color': '#5af78e' },
        'hljs-builtin-name': { 'color': '#5af78e' },
        'hljs-literal': { 'color': '#5af78e' },
        'hljs-type': { 'color': '#5af78e' },
        'hljs-params': { 'color': '#5af78e' },
        'hljs-string': { 'color': '#5af78e' },
        'hljs-symbol': { 'color': '#f3f99d' },
        'hljs-bullet': { 'color': '#f3f99d' },
        'hljs-title': { 'color': '#57c7ff' },
        'hljs-section': { 'color': '#57c7ff' },
        'hljs-keyword': { 'color': '#ff6ac1' },
        'hljs-deletion': { 'color': '#ff6ac1' },
        'hljs-addition': { 'color': '#9aedfe' },
        'hljs-emphasis': { 'color': '#9aedfe' },
        'hljs-strong': { 'color': '#9aedfe' }
    };

    const codeString = '/* Code to get the Perimeter of the Triangle using the Monolithic Architecture */\n\n' +
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