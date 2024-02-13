import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleLayeredUIPerimeterCode() {

    const codeString = '/* Code of the UI of the Triangle (Perimeter) option using the Layered Architecture */\n\n' +
        'import ...\n' +
        ''

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