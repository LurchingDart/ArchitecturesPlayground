import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareClientCode() {

    const codeString = '/* Code to get the Area and Perimeter of the Square using the Client Server Architecture */\n\n' +
        'const url = \'https://client-server.api/square/\';\n\n' +
        'const perimeterSquare = async () => {\n' +
        '   try {\n' +
        '       const response = await axios.get(`url`);\n' +
        '       handleModalContent(`The perimeter of the square is ${response.data.perimeter}`);\n' +
        '       onOpen();\n' +
        '   } catch (error) {\n' +
        '       console.error(error);\n' +
        '   }\n' +
        '}\n' +
        '\n' +
        'const areaSquare = async () => {\n' +
        '   try {\n' +
        '       const response = await axios.get(`url`);\n' +
        '       handleModalContent(`The area of the square is ${response.data.area}`);\n' +
        '       onOpen();\n' +
        '   } catch (error) {\n' +
        '       console.error(error);\n' +
        '   }\n' +
        '}';

    return (
        <SyntaxHighlighter
            language="javascript"
            style={Snazzy}
            className="rounded-2xl p-5 m-5 md:overflow-x-auto"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}