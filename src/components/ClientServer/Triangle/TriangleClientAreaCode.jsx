import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";


export default function TriangleClientAreaCode() {

    const codeString = '/* Code to get the Area of the Triangle using the Client Server Architecture */\n\n' +
        'const url = \'https://client-server.api/triangle/\';\n\n' +

        'const areaTriangle = async () => {\n' +
        '   try {\n' +
        '       const response = await axios.get(`url/${base}/${height}`);\n' +
        '       handleModalContent(`The perimeter of the square is ${response.data.area}`);\n' +
        '       onOpen();\n' +
        '   } catch (error) {\n' +
        '       console.error(error);\n' +
        '   }\n' +
        '}';

    return (
        <SyntaxHighlighter
            language="javascript"
            style={Snazzy}
            className="rounded-2xl p-3 m-2 md:overflow-x-auto"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}