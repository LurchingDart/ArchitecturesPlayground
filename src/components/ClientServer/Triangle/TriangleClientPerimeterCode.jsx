import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleClientServerAreaCode() {

    const codeString = '/* Code to get the Perimeter of the Triangle using the Client Server Architecture */\n\n' +
        'const url = \'https://client-server.api/triangle/\';\n\n' +

        'const perimeterTriangle = async () => {\n' +
        '   try {\n' +
        '       const response = await axios.get(`url/${sides}`);\n' +
        '       handleModalContent(`The perimeter of the square is ${response.data.perimeter}`);\n' +
        '       onOpen();\n' +
        '   } catch (error) {\n' +
        '       console.error(error);\n' +
        '   }\n' +
        '}';

    return (
        <SyntaxHighlighter
            language="javascript"
            style={Snazzy}
            className="rounded-2xl p-3 md:overflow-x-auto"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}