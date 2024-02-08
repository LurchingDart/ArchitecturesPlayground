import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function CircleClientCode() {

    const codeString = '/* Code to get the Area and Perimeter of the Circle using the Client Server Architecture */\n\n' +
        '   const perimeterCircle = async () => {\n' +
        '       try {\n' +
        '           const response = await axios.get(`https://architectures-clientserver.vercel.app/circle/perimeter/${radius}`);\n' +
        '           handleModalContent(`The perimeter of the circle is ${response.data.perimeter}`);\n' +
        '           onOpen();\n' +
        '       } catch (error) {\n' +
        '           console.error(error);\n' +
        '       }\n' +
        '   }\n' +
        '\n' +
        '   const areaCircle = async () => {\n' +
        '       try {\n' +
        '           const response = await axios.get(`https://architectures-clientserver.vercel.app/circle/area/${radius}`);\n' +
        '           handleModalContent(`The area of the circle is ${response.data.area}`);\n' +
        '           onOpen();\n' +
        '       } catch (error) {\n' +
        '           console.error(error);\n' +
        '       }\n' +
        '   }';

    return (
        <SyntaxHighlighter
            language="javascript"
            style={Snazzy}
            className="rounded-2xl p-3 m-5 overflow-x-scroll md:overflow-x-auto"
            wrapLongLines={true}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}