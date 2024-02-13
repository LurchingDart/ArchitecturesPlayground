import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function CircleMicroservicePerimeterCode() {

    const codeString = '/* Code to get the Perimeter of the Circle using the Microservices Architecture */\n\n' +
        'routes.get(\'/:radius\', (req, res) => {\n' +
        '   const side = req.params.side;\n' +
        '   const perimeter = circlePerimeter(radius);\n' +
        '   res.json({ perimeter });\n' +
        '});\n\n' +
        'circlePerimeter: (radius) => {\n' +
        '   let result = 2 * Math.PI * parseInt(circleRadius);\n' +
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