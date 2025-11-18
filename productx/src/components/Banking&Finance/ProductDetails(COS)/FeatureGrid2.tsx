import React from 'react';

import { H2, P } from "../../../styles/Typography";



interface FeatureItemProps {

number: string;

text: string;

}



// Reusable component for the numbered feature items (no changes needed here)

const FeatureItem: React.FC<FeatureItemProps> = ({ number, text }) => {

return (

<div className="flex flex-col py-2 sm:py-3 pr-1 sm:pr-2">

<div className="flex items-center mb-2 sm:mb-3">

<span className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-700 border-l-4 border-rose-700 pl-3 sm:pl-4">

{number}

</span>

</div>

<P className="mt-3 leading-snug text-[#2A2A2A]">

{text}

</P>

</div>

);

};



export default function FeatureGrid2() {

return (

// UPDATED: Adjusted min-height for 'sm' screens and reduced vertical padding 'sm:py-6'

<div className="w-full min-h-[60vh] sm:min-h-[50vh] bg-gray-200 py-6 sm:py-10 md:py-10 px-3 sm:px-6 md:px-10 flex items-center justify-center">

<div className="max-w-7xl mx-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start">



{/* Column 1: Heading (Left Side) */}

<div className="lg:col-span-1">

<H2 className="leading-tight text-center lg:text-left text-[#2B68C3] xl:mt-8">

Lorem ipsum dolor, consect adipis ipsum

</H2>

</div>


{/* Column 2: Paragraph and Feature Grid (Right Side) */}

<div className="lg:col-span-1">

<P className="mb-6 sm:mb-8 md:mb-14 md:mt-10 ">

Lorem ipsum dolor sit amet, consectetur adipiscing elit,

sed do eiusmod tempor incididunt ut labore et dolore magna

aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, swde tempor.

</P>



{/* Feature Items Grid */}

<div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-8 sm:gap-y-10 md:gap-y-12 max-w-md sm:max-w-lg mx-auto lg:mx-0">

<FeatureItem number="01" text="Lorem ipsum dolor" />

<FeatureItem number="02" text="Lorem ipsum dolor" />

<FeatureItem number="03" text="Lorem ipsum dolor" />

<FeatureItem number="04" text="Lorem ipsum dolor" />

</div>

</div>

</div>

</div>

);

} 