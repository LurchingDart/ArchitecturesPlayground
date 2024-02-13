import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function CircleLayeredLogicCode() {

    const codeString = '/* Code of the Logic of the Circle option using the Layered Architecture */\n\n' +
        'function perimeterCircle() {\n' +
        '   let result = 2 * Math.PI * radius;\n' +
        '   handleModalContent(`The perimeter of the circle is ${result}`);\n' +
        '   onOpen();\n' +
        '}\n' +
        '\n' +
        'function areaCircle() {\n' +
        '   let result = Math.PI * Math.pow(radius, 2);\n' +
        '   handleModalContent(`The area of the circle is ${result}`);\n' +
        '   onOpen();\n' +
        '}' ;

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