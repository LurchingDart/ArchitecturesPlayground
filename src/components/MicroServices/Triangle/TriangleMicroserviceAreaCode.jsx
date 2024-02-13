import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleMicroserviceAreaCode() {

    const codeString = '/* Code to get the Area of the Triangle using the Microservices Architecture */\n\n' +
        'routes.get(\'/:base/:height\', (req, res) => {\n' +
        '   const base = req.params.base;\n' +
        '   const height = req.params.height;\n' +
        '   const area = triangleArea(base, height);\n' +
        '   res.json({ area });\n' +
        '});\n\n' +
        'triangleArea: (side) => {\n' +
        '   return (parseInt(baseT) * parseInt(heightT)) / 2\n' +
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