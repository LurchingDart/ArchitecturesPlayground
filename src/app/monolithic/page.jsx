'use client'
import {
    Tabs,
    Tab,
} from "@nextui-org/react";

import React, { useState } from 'react';

import CodeSquareMonolithic from "@/components/CodeSquareMonolithic";

import SquareMonolithic from "@/components/SquareMonolithic";
import CircleMonolithic from "@/components/CircleMonolithic";
import CodeCircleMonolithic from "@/components/CodeCircleMonolithic";
import TriangleMonolithic from "@/components/TriangleMonolithic";
import CodeTriangleAreaMonolithic from "@/components/CodeTriangleAreaMonolithic";
import CodeTrianglePerimeterMonolithic from "@/components/CodeTrianglePerimeterMonolithic";

export default function Home() {
    const [selectedOption, setSelectedOption] = useState('area');
    return (
        <div className="flex h-full w-full flex-col">
            <div>
                <h1 className="text-4xl font-bold text-center m-5">Monolithic</h1>
            </div>
            <div className="flex flex-col items-center h-full ">
                <Tabs aria-label="Options" color="primary" className="">
                    <Tab key="square" title="Square" className="flex w-full h-full">
                        <SquareMonolithic/>
                        <div className="flex flex-1 items-center justify-center">
                            <CodeSquareMonolithic/>
                        </div>
                    </Tab>
                    <Tab key="circle" title="Circle" className="flex w-full h-full">
                        <CircleMonolithic/>
                        <div className="flex flex-1 items-center justify-center">
                            <CodeCircleMonolithic/>
                        </div>
                    </Tab>
                    <Tab key="triangle" title="Triangle" className="flex w-full h-full">
                        <TriangleMonolithic setSelectedOption={setSelectedOption}/>
                        <div className="flex flex-1 flex-col items-center justify-center">
                            {selectedOption === 'area' ? (
                                <CodeTriangleAreaMonolithic/>
                            ) : (
                                <CodeTrianglePerimeterMonolithic/>
                            )}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
