import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleServerPerimeterCode() {

    const codeString = '/* Code to get the Perimeter of the Triangle using the Client Server Architecture */\n\n' +
        '   routes.get(\'/perimeter/:sides\', (req, res) => {\n' +
        '       const side1 = req.params.side1;\n' +
        '       const side2 = req.params.side2;\n' +
        '       const side3 = req.params.side3;\n' +
        '       const perimeter = trianglePerimeter(side1, side2, side3);\n' +
        '       res.json({ perimeter });\n' +
        '   });\n\n' +
        '/* Code of the calculator in the server*/\n\n' +
        '    trianglePerimeter: (sideT1, sideT2, sideT3) => {\n' +
        '        return parseInt(sideT1) + parseInt(sideT2) + parseInt(sideT3)\n' +
        '    },';

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