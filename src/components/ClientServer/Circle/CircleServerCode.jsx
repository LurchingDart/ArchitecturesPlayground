import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function CircleServerCode() {

    const codeString = '/* Code to get the Area and Perimeter of the Circle using the Client Server Architecture */\n' +
        'routes.get(\'/perimeter/:radius\', (req, res) =>  {\n' +
        '    const radius = req.params.radius;\n' +
        '    const perimeter = circlePerimeter(radius);\n' +
        '    res.json({ perimeter });\n' +
        '});\n' +
        '\n' +
        'routes.get(\'/area/:radius\', (req, res) =>  {\n' +
        '    const radius = req.params.radius;\n' +
        '    const area = circleArea(radius);\n' +
        '    res.json({ area });\n' +
        '});\n\n' +
        '/* Code of the calculator in the server*/\n' +
        '    circlePerimeter: (circleRadius) => {\n' +
        '        let result = 2 * Math.PI * parseInt(circleRadius);\n' +
        '        return result.toFixed(2);\n' +
        '    },\n' +
        '    circleArea: (circleRadius) => {\n' +
        '        let result = Math.PI * Math.pow(circleRadius, 2)\n' +
        '        return result.toFixed(2);\n' +
        '    },';

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