import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareLayeredLogicCode() {

    const codeString = '/* Code of the Logic of the Square option using the Layered Architecture */\n\n' +
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