'use client'
import {
    Tabs,
    Tab,
} from "@nextui-org/react";

import React, { useState } from 'react';

import SquareClientServer from "@/components/ClientServer/Square/SquareClientServer";
import SquareClientCode from "@/components/ClientServer/Square/SquareClientCode";
import SquareServerCode from "@/components/ClientServer/Square/SquareServerCode";

import CircleClientServer from "@/components/ClientServer/Circle/CircleClientServer";
import CircleClientCode from "@/components/ClientServer/Circle/CircleClientCode";
import CircleServerCode from "@/components/ClientServer/Circle/CircleServerCode";

import TriangleClientServer from "@/components/ClientServer/Triangle/TriangleClientServer";
import TriangleClientPerimeterCode from "@/components/ClientServer/Triangle/TriangleClientPerimeterCode";
import TriangleServerPerimeterCode from "@/components/ClientServer/Triangle/TriangleServerPerimeterCode";
import TriangleClientAreaCode from "@/components/ClientServer/Triangle/TriangleClientAreaCode";
import TriangleServerAreaCode from "@/components/ClientServer/Triangle/TriangleServerAreaCode";

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
                        <div className="flex flex-1 flex-col items-center">
                            <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                <Tab key="client" title="Client" className="flex flex-1">
                                    <SquareClientCode/>
                                </Tab>
                                <Tab key="server" title="Server" className="flex flex-1">
                                    <SquareServerCode/>
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
                                <Tab key="client" title="Client" className="flex flex-1">
                                    <CircleClientCode/>
                                </Tab>
                                <Tab key="server" title="Server" className="flex flex-1">
                                    <CircleServerCode/>
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
                                        <Tab key="client" title="Client" className="flex flex-1">
                                            <TriangleClientAreaCode/>
                                        </Tab>
                                        <Tab key="server" title="Server" className="flex flex-1">
                                            <TriangleServerAreaCode/>
                                        </Tab>
                                    </Tabs>
                                </div>
                            ) : (
                                <div className="flex flex-1 flex-col items-center">
                                    <Tabs aria-label="Options" color="primary" className="flex flex-col">
                                        <Tab key="client" title="Client" className="flex flex-1">
                                            <TriangleClientPerimeterCode/>
                                        </Tab>
                                        <Tab key="server" title="Server" className="flex flex-1">
                                            <TriangleServerPerimeterCode/>
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
