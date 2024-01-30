'use client'
import {
    Tabs,
    Tab,
} from "@nextui-org/react";

import React, { useState } from 'react';

import SquareClientServer from "@/components/ClientServer/Square/SquareClientServer";
import SquareMonolithicCode from "@/components/Monolithic/Square/SquareMonolithicCode";

import CircleClientServer from "@/components/ClientServer/Circle/CircleClientServer";
import CircleMonolithicCode from "@/components/Monolithic/Circle/CircleMonolithicCode";

import TriangleClientServer from "@/components/ClientServer/Triangle/TriangleClientServer";
import TriangleMonolithicAreaCodeDisplay from "@/components/Monolithic/Triangle/TriangleMonolithicAreaCodeDisplay";
import TriangleMonolithicPerimeterCodeDisplay from "@/components/Monolithic/Triangle/TriangleMonolithicPerimeterCodeDisplay";

export default function ClientServer() {
    const [selectedOption, setSelectedOption] = useState('area');
    return (
        <div className="flex h-full w-full flex-col">
            <div>
                <h1 className="text-4xl text-primary text-center m-5 font-semibold">
                    Client Server
                </h1>
            </div>
            <div className="flex flex-col items-center h-full">
                <Tabs aria-label="Options" color="primary" className="">
                    <Tab key="square" title="Square" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <SquareClientServer/>
                        </div>
                        <div className="flex flex-1 m-5">
                            <SquareMonolithicCode/>
                        </div>
                    </Tab>
                    <Tab key="circle" title="Circle" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <CircleClientServer/>
                        </div>
                        <div className="flex flex-1 m-5">
                            <CircleMonolithicCode/>
                        </div>
                    </Tab>
                    <Tab key="triangle" title="Triangle" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <TriangleClientServer setSelectedOption={setSelectedOption}/>
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
