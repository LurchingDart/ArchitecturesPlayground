import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function CircleMicroserviceAreaCode() {

    const codeString = '/* Code to get the Area of the Circle using the Microservices Architecture */\n\n' +
        'routes.get(\'/:radius\', (req, res) => {\n' +
        '   const side = req.params.side;\n' +
        '   const area = circleArea(radius);\n' +
        '   res.json({ area });\n' +
        '});\n\n' +
        'circleArea: (radius) => {\n' +
        '   let result = Math.PI * Math.pow(circleRadius, 2)\n' +
        '   return result.toFixed(2);\n' +
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