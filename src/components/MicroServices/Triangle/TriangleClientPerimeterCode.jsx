import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleClientPerimeterCode() {

    const codeString = '/* Code of the client consuming the microservice to get the perimeter of a Triangle */\n\n' +
        'const perimeterTriangle = async () => {\n' +
        '   try {\n' +
        '       const response = await axios.get(`https://microservice-triangle-per.vercel.app/:side`);\n' +
        '       handleModalContent(`The perimeter of the triangle is ${response.data.area}`);\n' +
        '       onOpen();\n' +
        '   } catch (error) {\n' +
        '       console.error(error);\n' +
        '   }\n' +
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