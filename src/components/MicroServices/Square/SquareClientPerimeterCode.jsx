import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareClientPerimeterCode() {

    const codeString = '/* Code of the client consuming the microservice to get the perimeter of a Square */\n\n' +
        'const perimeterSquare = async () => {\n' +
        '   try {\n' +
        '       const response = await axios.get(`https://microservice-square-per.vercel.app/:side`);\n' +
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
            className="rounded-2xl p-5 m-2 md:overflow-x-auto"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}