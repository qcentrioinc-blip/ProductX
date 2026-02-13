import React from 'react';
import { H2, H3, P } from '../../../styles/Typography';
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
        slug: "how-modern-pms-boost-patient-referrals",
        date: '8 Sep 2025',
        imageSrc: '/EHR-PMS/Blogs/img5.png',
        title: 'Sed ut perspiciatis Unde',
        subtitle: 'How Modern PMS Can Boost Patient Referrals and Retention',
        description: 'A steady stream of both is useful to a healthy practice. The right software can do much more than just handle schedules and billing, it can become a direct tool for building your business. ',
    },
    {
        id: 6,
        slug: "what-do-these-terms-actually-mean-for-care-providers",
        date: '8 Sep 2025',
        imageSrc: '/EHR-PMS/Blogs/img6.png',
        title: 'Sed ut perspiciatis Unde',
        subtitle: "What Do These Terms Actually Mean for Care Providers?",
        description: 'For your healthcare providers and businesses, implementing a suitable, efficient software system can be beneficial. But the technical terms used to describe these systems often create confusion.',
    },
    {
        id: 7,
        slug: "pms-referrals-retention-advanced",
        date: '8 Sep 2025',
        imageSrc: '/EHR-PMS/Blogs/img7.png',
        title: 'Sed ut perspiciatis Unde',
        subtitle: 'How Modern PMS Can Boost Patient Referrals and Retention',
        description: 'For your healthcare providers and businesses, implementing a suitable, efficient software system can be beneficial. But the technical terms used to describe these systems often create confusion.',
    }
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
        <div className="flex flex-col w-full">
            {/* Text Content */}
            <P className="text-gray-600 mb-2 text-sm">{date}</P>
            {/*<H2 className="text-2xl font-bold leading-tight mb-1">{title}</H2> */}
            <H3 className=" mb-4">{subtitle}</H3>
            <P className="text-gray-700 mb-10">{description}</P>

            {/* Image Container: Responsive scaling */}
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
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '8px' }}
                />
            </div>
        </div>
    );
};

// --- Main Component for the Responsive Grid (Renamed for clarity) ---
const ImageCard: React.FC = () => {
    return (
        <section className="py-10">
            {/* INCREASED MAX WIDTH: max-w-7xl -> max-w-8xl */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div>
                    <H2 className=' text-left text-[#008280] mb-10 xl:mb-12'>Sed ut perspiciatis Unde <br/>Seduo ut perspiciatis </H2>
                    </div>
                <div
                    // Grid setup remains responsive: 1 col (mobile), 2 col (md), 3 col (lg)
                    // INCREASED GAP: gap-8 -> gap-10
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                   {NEW_MOCK_ARTICLES.map(article => (
  <Link 
    key={article.id} 
    to={`/blogs/${article.slug}`} 
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