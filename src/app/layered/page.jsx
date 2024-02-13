'use client'
import {
    Tabs,
    Tab,
} from "@nextui-org/react";

import React, { useState } from 'react';

import SquareClientServer from "@/components/ClientServer/Square/SquareClientServer";
import SquareLayeredUICode from "@/components/Layered/Square/SquareLayeredUICode";
import SquareLayeredLogicCode from "@/components/Layered/Square/SquareLayeredLogicCode";

import CircleClientServer from "@/components/ClientServer/Circle/CircleClientServer";
import CircleLayeredUICode from "@/components/Layered/Circle/CircleLayeredUICode";
import CircleLayeredLogicCode from "@/components/Layered/Circle/CircleLayeredLogicCode";


import TriangleClientServer from "@/components/ClientServer/Triangle/TriangleClientServer";
import TriangleLayeredUIAreaCode from "@/components/Layered/Triangle/TriangleLayeredUIAreaCode";
import TriangleLayeredUIPerimeterCode from "@/components/Layered/Triangle/TriangleLayeredUIPerimeterCode";
import TriangleLayeredLogicPerimeterCode from "@/components/Layered/Triangle/TriangleLayeredLogicPerimeterCode";
import TriangleLayeredLogicAreaCode from "@/components/Layered/Triangle/TriangleLayeredLogicAreaCode";


export default function ClientServer() {
    const [selectedOption, setSelectedOption] = useState('area');
    return (
        <div className="flex h-full w-full flex-col">
            <div>
                <h1 className="text-4xl text-primary text-center m-5 font-semibold">
                    Layered
                </h1>
            </div>
            <div className="flex flex-col items-center h-full">
                <Tabs aria-label="Options" color="primary" className="">
                    <Tab key="square" title="Square" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <SquareClientServer/>
                        </div>
                        <div className="flex flex-1 flex-col items-center">
                            <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                <Tab key="UI" title="UI" className="flex flex-1 flex-col">
                                    <SquareLayeredUICode/>
                                </Tab>
                                <Tab key="server" title="Logica" className="flex flex-1 flex-col">
                                    <SquareLayeredLogicCode/>
                                </Tab>
                            </Tabs>
                        </div>
                    </Tab>
                    <Tab key="circle" title="Circle" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <CircleClientServer/>
                        </div>
                        <div className="flex flex-1 flex-col items-center">
                            <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                <Tab key="client" title="UI" className="flex flex-1 flex-col">
                                    <CircleLayeredUICode/>
                                </Tab>
                                <Tab key="server" title="Logica" className="flex flex-1 flex-col">
                                    <CircleLayeredLogicCode/>
                                </Tab>
                            </Tabs>
                        </div>
                    </Tab>
                    <Tab key="triangle" title="Triangle" className="flex w-full flex-col">
                        <div className="flex flex-1 m-5">
                            <TriangleClientServer setSelectedOption={setSelectedOption}/>
                        </div>
                        <div className="flex flex-1 m-5">
                            {selectedOption === 'area' ? (
                                <div className="flex flex-1 flex-col items-center">
                                    <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                        <Tab key="client" title="UI" className="flex flex-1 flex-col">
                                            <TriangleLayeredUIAreaCode/>
                                        </Tab>
                                        <Tab key="server" title="Logica" className="flex flex-1 flex-col">
                                            <TriangleLayeredLogicAreaCode/>
                                        </Tab>
                                    </Tabs>
                                </div>
                            ) : (
                                <div className="flex flex-1 flex-col items-center">
                                    <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                        <Tab key="client" title="UI" className="flex flex-1 flex-col">
                                            <TriangleLayeredUIPerimeterCode/>
                                        </Tab>
                                        <Tab key="server" title="Logica" className="flex flex-1 flex-col">
                                            <TriangleLayeredLogicPerimeterCode/>
                                        </Tab>
                                    </Tabs>
                                </div>
                            )}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
