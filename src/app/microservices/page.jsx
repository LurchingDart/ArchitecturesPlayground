'use client'
import {
    Tabs,
    Tab,
} from "@nextui-org/react";

import React, { useState } from 'react';

import SquareClientServer from "@/components/ClientServer/Square/SquareClientServer";
import SquareMicroservicePerimeterCode from "@/components/MicroServices/Square/SquareMicroservicePerimeterCode";
import SquareMicroserviceAreaCode from "@/components/MicroServices//Square/SquareMicroserviceAreaCode";
import SquareClientAreaCode from "@/components/MicroServices/Square/SquareClientAreaCode";
import SquareClientPerimeterCode from "@/components/MicroServices/Square/SquareClientPerimeterCode";

import CircleClientServer from "@/components/ClientServer/Circle/CircleClientServer";
import CircleClientAreaCode from "@/components/MicroServices/Circle/CircleClientAreaCode";
import CircleClientPerimeterCode from "@/components/MicroServices/Circle/CircleClientPerimeterCode";
import CircleMicroservicePerimeterCode from "@/components/MicroServices/Circle/CircleMicroservicePerimeterCode";
import CircleMicroserviceAreaCode from "@/components/MicroServices/Circle/CircleMicroserviceAreaCode";


import TriangleClientServer from "@/components/ClientServer/Triangle/TriangleClientServer";
import TriangleClientAreaCode from "@/components/MicroServices/Triangle/TriangleClientAreaCode";
import TriangleClientPerimeterCode from "@/components/MicroServices/Triangle/TriangleClientPerimeterCode";
import TriangleMicroservicePerimeterCode from "@/components/MicroServices/Triangle/TriangleMicroservicePerimeterCode";
import TriangleMicroserviceAreaCode from "@/components/MicroServices/Triangle/TriangleMicroserviceAreaCode";
import TriangleServerPerimeterCode from "@/components/ClientServer/Triangle/TriangleServerPerimeterCode";
import TriangleServerAreaCode from "@/components/ClientServer/Triangle/TriangleServerAreaCode";

export default function ClientServer() {
    const [selectedOption, setSelectedOption] = useState('area');
    return (
        <div className="flex h-full w-full flex-col">
            <div>
                <h1 className="text-4xl text-primary text-center m-5 font-semibold">
                    Microservices
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
                                <Tab key="client" title="Client" className="flex flex-1 flex-col">
                                    <SquareClientPerimeterCode/>
                                    <SquareClientAreaCode/>
                                </Tab>
                                <Tab key="server" title="Servers" className="flex flex-1 flex-col">
                                    <SquareMicroservicePerimeterCode/>
                                    <SquareMicroserviceAreaCode/>
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
                                <Tab key="client" title="Client" className="flex flex-1 flex-col">
                                    <CircleClientPerimeterCode/>
                                    <CircleClientAreaCode/>
                                </Tab>
                                <Tab key="server" title="Servers" className="flex flex-1 flex-col">
                                    <CircleMicroservicePerimeterCode/>
                                    <CircleMicroserviceAreaCode/>
                                </Tab>
                            </Tabs>
                        </div>
                    </Tab>
                    <Tab key="triangle" title="Triangle" className="flex w-full flex-col xlg:flex-row">
                        <div className="flex flex-1 m-5">
                            <TriangleClientServer setSelectedOption={setSelectedOption}/>
                        </div>
                        <div className="flex flex-1 m-5">
                            {selectedOption === 'area' ? (
                                <div className="flex flex-1 flex-col items-center">
                                    <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                        <Tab key="client" title="Client" className="flex flex-1 flex-col">
                                            <TriangleClientAreaCode/>
                                        </Tab>
                                        <Tab key="server" title="Servers" className="flex flex-1 flex-col">
                                            <TriangleMicroserviceAreaCode/>
                                        </Tab>
                                    </Tabs>
                                </div>
                            ) : (
                                <div className="flex flex-1 flex-col items-center">
                                    <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                        <Tab key="client" title="Client" className="flex flex-1 flex-col">
                                            <TriangleClientPerimeterCode/>
                                        </Tab>
                                        <Tab key="server" title="Servers" className="flex flex-1 flex-col">
                                            <TriangleMicroservicePerimeterCode/>
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
