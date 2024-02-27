'use client'
import {
    Tabs,
    Tab,
} from "@nextui-org/react";

import React, { useState } from 'react';

import CircleMonolithic from "@/components/Monolithic/Circle/CircleMonolithic";
import CircleMonolithicCode from "@/components/Monolithic/Circle/CircleMonolithicCode";

import SquareMonolithic from "@/components/Monolithic/Square/SquareMonolithic";
import SquareMonolithicCode from "@/components/Monolithic/Square/SquareMonolithicCode";

import TriangleMonolithic from "@/components/Monolithic/Triangle/TriangleMonolithic";
import TriangleMonolithicAreaCodeDisplay from "@/components/Monolithic/Triangle/TriangleMonolithicAreaCodeDisplay";
import TriangleMonolithicPerimeterCodeDisplay from "@/components/Monolithic/Triangle/TriangleMonolithicPerimeterCodeDisplay";

export default function Monolithic() {
    const [selectedOption, setSelectedOption] = useState('area');
    return (
        <div className="flex h-full w-full flex-col">
            <div>
                <h1 className="text-4xl text-primary text-center m-5 font-semibold">
                    Monolithic
                </h1>
            </div>
            <div className="flex flex-col items-center h-full">
                <Tabs aria-label="Options" color="primary" className="">
                    <Tab key="square" title="Square" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <SquareMonolithic/>
                        </div>
                        <div className="flex flex-1 m-5">
                            <SquareMonolithicCode/>
                        </div>
                    </Tab>
                    <Tab key="circle" title="Circle" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <CircleMonolithic/>
                        </div>
                        <div className="flex flex-1 m-5">
                            <CircleMonolithicCode/>
                        </div>
                    </Tab>
                    <Tab key="triangle" title="Triangle" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <TriangleMonolithic setSelectedOption={setSelectedOption}/>
                        </div>
                        <div className="flex flex-1 m-5">
                            {selectedOption === 'area' ? (
                                <TriangleMonolithicAreaCodeDisplay/>
                            ) : (
                                <TriangleMonolithicPerimeterCodeDisplay/>
                            )}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
