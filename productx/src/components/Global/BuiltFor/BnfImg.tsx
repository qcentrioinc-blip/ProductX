import React from "react";
import { useParams } from "react-router-dom";

// Types
type Content = {
    heroHeading: React.ReactNode;
    imgSrc: string;
    bgSrc: string; // The background image applied behind
};

// Content for sub-industries of Banking & Finance
const CONTENT: Record<string, Content> = {
    "banks": {
        heroHeading: <>Modern banking requires <br /> modern solutions. <br /> We deliver both.</>,
        imgSrc: "/BuiltForBnf/bank5th.webp",
        bgSrc: "/BuiltForBnf/Bank.webp",
    },
    "credit-union": {
        heroHeading: <>Built for credit unions.<br />Powered by innovation.<br />Focused on members.</>,
        imgSrc: "/BuiltForBnf/credit5th.webp",
        bgSrc: "/BuiltForBnf/credit.webp",
    },
    "financial-unions": {
        heroHeading: <>Enterprise banking<br />solutions for financial<br />institutions</>,
        imgSrc: "/BuiltForBnf/finance5th.webp",
        bgSrc: "/BuiltForBnf/financial1.webp",
    },
};

export default function BnfImg() {
    const { builtForType } = useParams<{ builtForType: string }>();

    // Default to banks if type is not found
    const content = CONTENT[builtForType || "banks"] || CONTENT["banks"];

    return (
        <section
            className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${content.bgSrc})`,
                minHeight: "500px",
            }}
        >
            <div
                className="relative mx-auto w-full xl:w-8xl xl:h-[740.62px] flex flex-col xl:block px-12 py-16 xl:p-0"
            >

                {/* HEADING CONTAINER */}
                <div
                    className="xl:absolute z-10 w-full mb-8 xl:mb-0"
                >
                    <div className="xl:absolute xl:top-[100px] xl:left-[81.21px] xl:w-5xl">
                        <h2
                            className="font-bricolage text-[#2B68C3] leading-none m-0 pt-0"
                            style={{
                                fontWeight: 600, // SemiBold
                                fontSize: "clamp(36px, 5vw, 64px)",
                            }}
                        >
                            {content.heroHeading}
                        </h2>
                    </div>
                </div>

                {/* IMAGE CONTAINER */}
                <div
                    className="xl:absolute z-0 w-full flex justify-center xl:block"
                >
                    <div className="w-[240px] max-w-[500px] aspect-square absolute top-[280px] left-[180px] h-[250px] sm:aspect-auto sm:absolute sm:top-[200px] sm:left-[400px] sm:w-[350px] sm:h-[350px] md:aspect-auto md:absolute md:top-[220px] md:left-[400px] md:w-[350px] md:h-[350px] lg:max-w-max-w-none lg:aspect-auto lg:absolute lg:top-[170px] lg:left-[630px] lg:w-[400px] lg:h-[350px] xl:max-w-none xl:aspect-auto xl:absolute xl:top-[200px] xl:left-[820px] xl:w-[700px] xl:h-[600px]">
                        <img
                            src={content.imgSrc}
                            alt="Enterprise banking solutions"
                            className="w-full h-full object-contain"
                            style={{
                                borderTopRightRadius: "70px",
                                borderBottomLeftRadius: "70px",
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
