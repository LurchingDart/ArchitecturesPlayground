import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function SquareLayeredUICode() {

    const codeString = '/* Code of the UI of the Circle option using the Layered Architecture */\n\n' +
        'import SquareLayered from "@/components/ClientServer/Square/SquareLayered";\n' +
        'import SquareLayeredUICode from "@/components/Layered/Square/CircleLayeredUICode";\n' +
        'import SquareLayeredLogicCode from "@/components/Layered/Square/CircleLayeredLogicCode";\n\n' +
        'export default function ClientServer() {\n' +
        '    const [selectedOption, setSelectedOption] = useState(\'area\');\n' +
        '    return (\n' +
        '        <div>\n' +
        '            ...\n' +
        '            <div>\n' +
        '                <Tabs aria-label="Options" color="primary">\n' +
        '                    ...\n' +
        '                    <Tab key="square" title="Square" >\n' +
        '                        <div>\n' +
        '                            <SquareLayered/>\n' +
        '                        </div>\n' +
        '                        <div>\n' +
        '                            <Tabs aria-label="Options" color="primary">\n' +
        '                                <Tab key="ui" title="UI">\n' +
        '                                    <SquareLayeredUICode/>\n' +
        '                                </Tab>\n' +
        '                                <Tab key="logic" title="Logic">\n' +
        '                                    <SquareLayeredLogicCode/>\n' +
        '                                </Tab>\n' +
        '                            </Tabs>\n' +
        '                        </div>\n' +
        '                    </Tab>\n' +
        '                    ...\n' +
        '                </Tabs>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    );\n' +
        '}'

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