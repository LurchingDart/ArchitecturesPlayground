import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareMicroservicePerimeterCode() {

    const codeString = '/* Code to get the Perimeter of the Square using the Microservices Architecture */\n\n' +
        'routes.get(\'/:side\', (req, res) => {\n' +
        '   const side = req.params.side;\n' +
        '   const perimeter = squarePerimeter(side);\n' +
        '   res.json({ perimeter });\n' +
        '});\n\n' +
        'squarePerimeter: (side) => {\n' +
        '   return (parseInt(side) * 4\n' +
        '}';

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