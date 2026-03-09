import React from 'react';
import {   H2, H4,  P } from '../../../styles/Typography';
import { Link } from 'react-router-dom';


// --- Interface for an Image Card ---
interface ArticleData {
    id: number;
    slug: string;  
    date: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    description: string;
}


// --- Mock Data ---
const NEW_MOCK_ARTICLES: ArticleData[] = [
    {
        id: 5,
        slug: "what-is-aml-compliance",
        date: '13 Feb 2026',
        imageSrc: '/Blog/AMLBlog.webp',
        title: 'Sed ut perspiciatis Unde',
        subtitle: 'What Is AML Compliance and Why Banks Cant Afford to Ignore  ',
        description: 'Banks have to deal with very specific, high-stakes responsibilities when it comes to financial crime...  ',
    },
    {
        id: 6,
        slug: "what-the-difference-and-why-both-matter-for-your-bank",
        date: '10 Feb 2026',
       imageSrc: '/Blog/KYCBlog.webp',
        title: 'Sed ut perspiciatis Unde',
        subtitle: "KYC vs. CDD: What's the Difference and Why Both Matter",
        description: 'When it comes to banking compliance, there are two terms that are important, used every day, and still mixed ...  ',
    },
    {
        id: 7,
        slug: "what-is-core-banking-and-when-should",
        date: '8 Feb 2026',
        
         imageSrc: '/Blog/CoreBankingBlog.webp',
        title: 'Sed ut perspiciatis Unde',
        subtitle: 'What Is Core Banking and When Should a Financial Institution..',
        description: 'If your financial institution is still working on old, outdated systems and functions, there is a high chance that you are falling... ',
    },
      {
        id: 8,
        slug: "how-to-reduce-payment-processing",
        date: '5 Feb 2026',
        
         imageSrc: '/Blog/CoreBankingBlog.webp',
        title: 'Sed ut perspiciatis Unde',
        subtitle: 'How to Reduce Process Payment Costs for Your Financial Institution',
        description: 'Most of the financial institutions face challenges from high transaction fees charged by traditional card networks... ',
    },
     {
        id: 9,
        slug: "a-beginner's-Guide-to-interest-rater-risk",
        date: '3 Feb 2026',
        
         imageSrc: '/Blog/CoreBankingBlog.webp',
        title: 'Sed ut perspiciatis Unde',
        subtitle: 'A Beginner"s Guide To Interest Rate Risk Management... ',
        description: 'If there is one top concern for community bankers in 2026, it is interest rate risk. Even small shifts in rates ... ',
    },
];

// --- Sub-Component for a Single Image Card with Text Above ---
// Renamed to ArticleCard for clarity
const ArticleCard: React.FC<ArticleData> = ({ date, imageSrc, title, subtitle, description }) => {
    // Aspect Ratio Calculation (405.5 / 317.9535827636719 ≈ 1.275)
    const ASPECT_RATIO_STYLE = { aspectRatio: '405.5 / 317.9535827636719' };
    const FALLBACK_WIDTH = 405;
    const FALLBACK_HEIGHT = 318;

    return (
        // The container now uses w-full and flex-col to ensure it fills its grid cell
        <div className="flex flex-col w-full ">
             <div
                className="relative w-full overflow-hidden rounded-lg"
                style={ASPECT_RATIO_STYLE} // Image height is now proportional to its width
            >
                <img
                    src={imageSrc}
                    alt={title}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/${FALLBACK_WIDTH}x${FALLBACK_HEIGHT}/cccccc/333333?text=Image`;
                    }}
                    className="w-full h-full object-contain"
                    style={{ borderRadius: '8px' }}
                />
            </div>
            {/* Text Content */}
            <P className="text-gray-600 my-2 text-sm">{date}</P>
            {/*<H2 className="text-2xl font-bold leading-tight mb-1">{title}</H2> */}
            <H4 className=" mb-4 ">{subtitle}</H4>
            <P className="text-gray-700 mb-4 ">{description}</P>

            {/* Image Container: Responsive scaling */}
           
        </div>
    );
};

 
const ImageCard: React.FC = () => {
    return (
        <section className="pt-10 ">
   
            <div className="max-w-7xl mx-auto xl:max-w-8xl  xl:mx-auto px-4 sm:px-6 xl:px-0 ">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 sm:mb-8 lg:mb-12">
                                    <H2 className="text-[#2B68C3] text-xl sm:text-2xl lg:text-3xl flex-shrink-0">
                                      Banking & Finance Insights
                                    </H2>
                                   
                                </div>
                {/* <div>
                    <H2 className=' text-left text-[#008280] mb-10 xl:mb-12'>Sed ut perspiciatis Unde <br/>Seduo ut perspiciatis </H2>
                    </div> */}
                <div
                    // Grid setup remains responsive: 1 col (mobile), 2 col (md), 3 col (lg)
                    // INCREASED GAP: gap-8 -> gap-10
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                 {NEW_MOCK_ARTICLES.slice(0, 3).map(article => (
  <Link 
    key={article.id} 
    to={`/industries/banking-and-finance/blogs/${article.slug}`} 
    className="block"
  >
    <ArticleCard {...article} />
  </Link>
))}
    
                </div>
            </div>
        </section>
    );
};

export default ImageCard;