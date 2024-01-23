'use client'

import * as React from 'react';
import {useState} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Tooltip
} from "@nextui-org/react";
import {GitHubIcon, LogoIcon, MicroservicesIcon, MonolithicIcon, ClientServerIcon, LayeredIcon, DropDownIcon} from "@/components/Icons";
import { siteConfig } from "@/config/SiteConfig";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const icons = {
        micro: <MicroservicesIcon fill="currentColor" size={16} />,
        mono: <MonolithicIcon className="text-warning" fill="currentColor" size={30} />,
        client: <ClientServerIcon className="text-success" fill="currentColor" size={30} />,
        layered: <LayeredIcon className="text-secondary" fill="currentColor" size={30} />,
        drop: <DropDownIcon className="text-secondary" fill="currentColor" size={30} />,
    };

    return (
        <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" color="foreground">
                        <LogoIcon />
                    </Link>
                    <p className="font-bold text-inherit">Architecture Playground</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={<DropDownIcon className="text-secondary" fill="currentColor" size={30} />}
                                radius="sm"
                                variant="light"
                            >
                                <spam color="foreground">Software Architectures</spam>
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Software Architectures"
                        className="w-[340px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >

                        <DropdownItem
                            key="monolithic"
                            description="Single, cohesive structure; all components tightly integrated in a unified application."
                            startContent={icons.mono}
                        >
                            <Link href="/monolithic"  color="foreground">
                                Monolithic Architecture
                            </Link>
                        </DropdownItem>
                        <DropdownItem
                            key="client_server"
                            description="Distributed model; clients request, servers respond, facilitating resource sharing and scalability."
                            startContent={icons.client}
                        >
                            <Link href="/client-server"  color="foreground">
                                Client-Server Architecture
                            </Link>
                        </DropdownItem>
                        <DropdownItem
                            key="micro_services"
                            description="Decentralized, modular components; independent services for flexibility, scalability, and easy maintenance."
                            startContent={icons.micro}
                        >
                            <Link href="/microservices"  color="foreground">
                                Microservices Architecture
                            </Link>
                        </DropdownItem>
                        <DropdownItem
                            key="layered"
                            description="Hierarchical structure; components organized in layers, promoting abstraction and separation of concerns."
                            startContent={icons.layered}
                        >
                            <Link href="/layered"  color="foreground">
                                Layered Architecture
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Tooltip content="GitHub Repo">
                        <Link href="https://github.com/LurchingDart/ArchitecturesPlayground" target="_blank" color="secondary">
                            <GitHubIcon />
                        </Link>
                    </Tooltip>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {siteConfig.navMenuLinks.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === siteConfig.navMenuLinks.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavBar;