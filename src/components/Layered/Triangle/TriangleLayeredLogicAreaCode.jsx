import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleLayeredLogicAreaCode() {

    const codeString = '/* Code of the Logic of the Triangle (Area) option using the Layered Architecture */\n\n' +
        'function areaTriangle() {\n' +
        '   let result = (baseTriangle * heightTriangle) / 2;\n' +
        '   handleModalContent(`The area of the triangle is ${result}`);\n' +
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