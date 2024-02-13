import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleLayeredLogicAreaCode() {

    const codeString = '/* Code of the Logic of the Triangle (Perimeter) option using the Layered Architecture */\n\n' +
        'function perimeterTriangle() {\n' +
        '   let result = parseInt(sideTriangle1) + parseInt(sideTriangle2) + parseInt(sideTriangle3);\n' +
        '   handleModalContent(`The perimeter of the triangle is ${result}`);\n' +
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