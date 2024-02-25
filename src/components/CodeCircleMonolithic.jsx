import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';

export default function CodeCircleMonolithic() {

    const Snazzy = {
        'hljs': {
            'backgroundColor': '#282a36',
            'color': '#eff0eb',
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

    const codeString = '/*\nCode to get the Area and Perimeter of the Circle\nusing the Monolithic Architecture\n*/\n\n' +
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
            className="rounded-2xl p-8"
        >
            {codeString}
        </SyntaxHighlighter>
    );
}