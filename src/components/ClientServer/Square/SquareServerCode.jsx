import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareClientCode() {

    const codeString = '/* Code to get the Area and Perimeter of the Square using the Client Server Architecture */\n' +
        '   routes.get(\'/perimeter/:side\', (req, res) => {\n' +
        '       const side = req.params.side;\n' +
        '       const perimeter = squarePerimeter(side);\n' +
        '       res.json({ perimeter });\n' +
        '   });\n' +
        '\n' +
        '   routes.get(\'/area/:side\', (req, res) => {\n' +
        '       const side = req.params.side;\n' +
        '       const area = squareArea(side);\n' +
        '       res.json({ area });\n' +
        '   });\n\n' +
        '/* Code of the calculator in the server*/\n' +
        '   squarePerimeter: (squareSide) => {\n' +
        '       return parseInt(squareSide) * 4;\n' +
        '   },\n' +
        '   squareArea: (squareSide) => {\n' +
        '       return parseInt(squareSide) * parseInt(squareSide);\n' +
        '   },';

    return (
        <SyntaxHighlighter
            language="javascript"
            style={Snazzy}
            className="rounded-2xl p-5 m-2 md:overflow-x-auto"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}