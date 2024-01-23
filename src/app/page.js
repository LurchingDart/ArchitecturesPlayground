'use client'
import { Image, Link, Button } from "@nextui-org/react";
import { ArrowRightIcon, GitHubIcon } from "@/components/Icons"

export default function Home() {

    return (
        <div className="lg:flex-row flex-col flex h-full w-full">
            <div className="flex flex-1 flex-col justify-center gap-7 items-center xl:justify-center xl:gap-14">
                <div className="text-center xlg:text-left xsl:m-10 lg:ml-10 xl:ml-36">
                    <h1 className="tracking-tight inline font-semibold text-5xl md:text-6xl xl:text-8xl xlg:text-7xl lg:text-6xl ">Learn some of the&nbsp;</h1>
                    <h1 className="tracking-tight inline font-semibold text-5xl md:text-6xl xl:text-8xl xlg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">Architectures&nbsp;</h1>
                    <br/>
                    <h1 className="tracking-tight inline font-semibold text-5xl md:text-6xl xl:text-8xl xlg:text-7xl">
                        of Software.
                    </h1>
                    <h2 className="text-default-500 text-2xl md:text-2xl xl:text-4xl xlg:text-3xl">
                        With a simple program to calculate measurements of figures.
                    </h2>
                </div>
                <div className="flex flex-col w-1/2 gap-5 justify-evenly lsm:flex-row lsm:justify-evenly xl:gap-12">
                    <Button
                        href="/monolithic"
                        as={Link}
                        color="primary"
                        variant="shadow"
                        endContent={<ArrowRightIcon/>}
                    >
                        Get Started
                    </Button>
                    <Button
                        href="https://github.com/LurchingDart/ArchitecturesPlayground"
                        as={Link}
                        color="primary"
                        startContent={<GitHubIcon/>}
                        variant="ghost"
                        >
                        GitHub
                    </Button>
                </div>
            </div>
            <div className=" flex flex-1 ">
                <div className="md:hidden w-full h-full flex justify-center items-start">
                    <Image
                        width={350}
                        height={350}
                        isBlurred
                        src="https://app.requestly.io/delay/500/https://i.imgur.com/I6fMOHs.png"
                        alt="Logo of the project"
                    />
                </div>
                <div className="hidden md:flex w-full h-full justify-center items-center">
                    <Image
                        width={512}
                        height={512}
                        isBlurred
                        src="https://app.requestly.io/delay/500/https://i.imgur.com/I6fMOHs.png"
                        alt="Logo of the project"
                    />
                </div>
            </div>
        </div>
    );
}
