import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import Snazzy from "@/components/SnazzyTheme";

export default function TriangleLayeredUIAreaCode() {

    const codeString = '/* Code of the UI of the Triangle option using the Layered Architecture */\n\n' +
        'import TriangleLayered from "@/components/Layered/Triangle/TriangleLayered";\n' +
        'import TriangleLayeredUIAreaCode from "@/components/Layered/Triangle/TriangleLayeredUIAreaCode";\n' +
        'import TriangleLayeredLogicAreaCode from "@/components/Layered/Triangle/TriangleLayeredLogicAreaCode";\n\n' +
        'export default function ClientServer() {\n' +
        '    const [selectedOption, setSelectedOption] = useState(\'area\');\n' +
        '    return (\n' +
        '        <div>\n' +
        '            ...\n' +
        '            <div>\n' +
        '                <Tabs aria-label="Options" color="primary">\n' +
        '                    ...\n' +
        '                   <Tab key="triangle" title="Triangle">\n' +
        '                        <div className="flex flex-1 m-5">\n' +
        '                            <TriangleLayered setSelectedOption={setSelectedOption}/>\n' +
        '                        </div>\n' +
        '                        <div>\n' +
        '                            {selectedOption === \'area\' ? (\n' +
        '                                <div >\n' +
        '                                    <Tabs aria-label="Options" color="primary">\n' +
        '                                        <Tab key="client" title="UI">\n' +
        '                                            <TriangleLayeredUIAreaCode/>\n' +
        '                                        </Tab>\n' +
        '                                        <Tab key="server" title="Logic">\n' +
        '                                            <TriangleLayeredLogicAreaCode/>\n' +
        '                                        </Tab>\n' +
        '                                    </Tabs>\n' +
        '                                </div>\n' +
        '                            ) : (\n' +
        '                                <div>\n' +
        '                                    <Tabs aria-label="Options" color="primary">\n' +
        '                                        <Tab key="client" title="UI">\n' +
        '                                            <TriangleLayeredUIPerimeterCode/>\n' +
        '                                        </Tab>\n' +
        '                                        <Tab key="server" title="Logica">\n' +
        '                                            <TriangleLayeredLogicPerimeterCode/>\n' +
        '                                        </Tab>\n' +
        '                                    </Tabs>\n' +
        '                                </div>\n' +
        '                            )}\n' +
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