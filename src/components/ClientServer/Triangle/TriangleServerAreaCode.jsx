import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleServerAreaCode() {

    const codeString = '/* Code to get the Area of the Triangle using the Client Server Architecture */\n\n' +
        '   routes.get(\'/area/:base/:height\', (req, res) => {\n' +
        '       const base = req.params.base;\n' +
        '       const height = req.params.height;\n' +
        '       const area = triangleArea(base, height);\n' +
        '       res.json({ area });\n' +
        '   });\n\n' +
        '/* Code of the calculator in the server*/\n\n' +
        '   triangleArea: (baseT, heightT) => {\n' +
        '       return (parseInt(baseT) * parseInt(heightT)) / 2\n' +
        '   }';

    return (
        <SyntaxHighlighter
            language="javascript"
            style={Snazzy}
            className="rounded-2xl p-3 m-5 overflow-x-scroll md:overflow-x-auto xlg:h-96"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}