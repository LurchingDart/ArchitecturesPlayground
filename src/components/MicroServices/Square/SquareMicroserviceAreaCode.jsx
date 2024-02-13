import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareMicroserviceAreaCode() {

    const codeString = '/* Code to get the Area of the Square using the Microservices Architecture */\n\n' +
        'routes.get(\'/:side\', (req, res) => {\n' +
        '   const side = req.params.side;\n' +
        '   const area = squareArea(base, height);\n' +
        '   res.json({ area });\n' +
        '});\n\n' +
        'squareArea: (side) => {\n' +
        '   return (parseInt(side) * parseInt(side))\n' +
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