import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function CircleLayeredUICode() {

    const codeString = '/* Code of the UI of the Circle option using the Layered Architecture */\n\n' +
        'import CircleLayered from "@/components/ClientServer/Circle/CircleLayered";\n' +
        'import CircleLayeredUICode from "@/components/Layered/Circle/CircleLayeredUICode";\n' +
        'import CircleLayeredLogicCode from "@/components/Layered/Circle/CircleLayeredLogicCode";\n\n' +
        'export default function ClientServer() {\n' +
        '    const [selectedOption, setSelectedOption] = useState(\'area\');\n' +
        '    return (\n' +
        '        <div>\n' +
        '            ...\n' +
        '            <div>\n' +
        '                <Tabs aria-label="Options" color="primary">\n' +
        '                    ...\n' +
        '                    <Tab key="circle" title="Circle" >\n' +
        '                        <div>\n' +
        '                            <CircleLayered/>\n' +
        '                        </div>\n' +
        '                        <div>\n' +
        '                            <Tabs aria-label="Options" color="primary">\n' +
        '                                <Tab key="ui" title="UI">\n' +
        '                                    <CircleLayeredUICode/>\n' +
        '                                </Tab>\n' +
        '                                <Tab key="logic" title="Logic">\n' +
        '                                    <CircleLayeredLogicCode/>\n' +
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