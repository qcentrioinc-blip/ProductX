import React, {
   
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resourceConfig } from "./resource.config";
import { H4, P } from "../../../styles/Typography";
// import { ArrowLeft, ArrowRight } from "lucide-react";

type Params = {
  industry: string;
  category: keyof typeof resourceConfig;
  slug?: string;
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const ResourceDoc: React.FC = () => {
  const { industry, category, slug } = useParams<Params>();
  const navigate = useNavigate();

  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  /* ---------------------------------------------
     Resolve category + items
  --------------------------------------------- */
  const categoryConfig = category ? resourceConfig[category] : undefined;
  const items = useMemo(() => categoryConfig?.items ?? [], [categoryConfig]);

  /* ---------------------------------------------
     Redirect category root → first item
  --------------------------------------------- */
  useEffect(() => {
    if (category && !slug && items.length > 0) {
      navigate(
        `/industries/${industry}/resources/${category}/${items[0].slug}`,
        { replace: true }
      );
    }
  }, [category, slug, items, industry, navigate]);

  /* ---------------------------------------------
     Resolve current item
  --------------------------------------------- */
  const flatItems = Object.entries(resourceConfig).flatMap(
  ([catKey, cat]) =>
    cat.items.map(item => ({
      ...item,
      category: catKey
    }))
);

  const flatIndex = flatItems.findIndex(
  i => i.slug === slug && i.category === category
);

const currentItem = flatItems[flatIndex];

const tocBuiltRef = useRef(false);

  /* ---------------------------------------------
     FIXED: Use a key to force re-mount on slug change
  --------------------------------------------- */
 const ContentComponent = currentItem
  ? React.lazy(currentItem.component)
  : null;


useEffect(() => {
  if (ContentComponent) {
    setTimeout(() => {
      const container = contentRef.current;
      if (!container) return;
      const headings = container.querySelectorAll("h1,h2,h3");
      if (headings.length > 0) {
        console.log("[TOC Builder] Found headings on initial mount");
      }
    }, 0);
  }
}, [ContentComponent]);

  /* ---------------------------------------------
     FIXED: Reset TOC when slug changes
  --------------------------------------------- */
 useEffect(() => {
  setToc([]);
  setActiveId("");
  setIsContentLoaded(false);
  tocBuiltRef.current = false;

  if (observerRef.current) {
    observerRef.current.disconnect();
    observerRef.current = null;
  }
}, [slug]);


  /* ---------------------------------------------
     FIXED: Build TOC with MutationObserver
  --------------------------------------------- */
useEffect(() => {
  if (!slug || !contentRef.current) return;

  let attempts = 0;
  const maxAttempts = 10;

  const tryBuild = () => {
    const container = contentRef.current;
    if (!container) return;
    const headings = container.querySelectorAll("h1,h2,h3");

    if (headings.length === 0 && attempts < maxAttempts) {
      attempts++;
      return setTimeout(tryBuild, 200);
    }

    if (headings.length === 0) {
      setIsContentLoaded(true);
      setToc([]);
      return;
    }

    const tocItems = Array.from(headings).map(h => {
      if (!h.id) {
        h.id = h.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      }
      return {
        id: h.id,
        text: h.textContent || "",
        level: parseInt(h.tagName.replace("H", ""))
      };
    });

    setToc(tocItems);
    setIsContentLoaded(true);

    // Scroll spy observer
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -66% 0px", threshold: [0.1, 0.5, 1] }
    );

    headings.forEach(h => {
      if (observerRef.current) observerRef.current.observe(h);
    });
  };

  tryBuild();

  return () => {
    if (observerRef.current) observerRef.current.disconnect();
  };
}, [slug]);


  /* ---------------------------------------------
     Render
  --------------------------------------------- */
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      {/* LEFT NAV */}
      <aside className="w-64 bg-[#FAFAFA]/25 px-6 py-8 sticky top-0 h-screen overflow-y-auto  scrollbar-hide border-r border-gray-200 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.08)]">
        {Object.entries(resourceConfig).map(([key, cat]) => (
          <div key={key} className="mb-4">
            <H4 className="mb-1">{cat.label}</H4>

            {cat.items.map(item => (
              <Link
                key={item.slug}
                to={`/industries/${industry}/resources/${key}/${item.slug}`}
                className={`relative block text-md py-1 font-quicksand font-medium rounded px-3 transition-colors
                  ${
                    slug === item.slug
                      ? "text-[#5551FF] font-medium before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-white shadow-xl m-10 rounded-2xl px-14 py-10 max-w-4xl">
        {/* Breadcrumb */}
        <div className="font-quicksand text-[#5551FF] mb-6">
          <Link to={`/industries/${industry}`} className="hover:text-blue-600">
            Home
          </Link>
          {" > "}
          <span className="text-[#5551FF]">{categoryConfig?.label}</span>
          {" > "}
          <span className="text-[#5551FF] font-medium">
            {currentItem?.label}
          </span>
        </div>

        {/* Content */}
 {/* <div ref={contentRef}> */}
  {ContentComponent && (
    <Suspense fallback={null} key={slug}>
      <ContentComponent />
    </Suspense>
   
  )}
 
 {/* </div>
  */}



        {/* PREV / NEXT */}
       <div className="flex justify-between mt-20 pt-6 border-t border-gray-300">
  {flatItems[flatIndex - 1] ? (
    <Link
      to={`/industries/${industry}/resources/${flatItems[flatIndex - 1].category}/${flatItems[flatIndex - 1].slug}`}
      className="text-[#020059] font-bricolage font-bold text-[18px] flex items-center gap-3 hover:text-blue-800 transition-colors"
    >
      <div className="w-8 h-8 rounded-full bg-[#CCCCCC] flex items-center justify-center">
        <img
          src="/AIProduct/RightArrowAI.png"
          alt="Previous"
          className="h-3 w-4"
        />
      </div>
      <span>Previous</span>
    </Link>
  ) : (
    <span />
  )}

  {flatItems[flatIndex + 1] ? (
    <Link
      to={`/industries/${industry}/resources/${flatItems[flatIndex + 1].category}/${flatItems[flatIndex + 1].slug}`}
      className="text-[#020059] font-bricolage font-bold text-[18px] flex items-center gap-3 hover:text-blue-800 transition-colors"
    >
      <span>Next</span>
      <div className="w-8 h-8 rounded-full bg-[#CCCCCC] flex items-center justify-center">
        <img
          src="/AIProduct/RightArrowAI.png"
          alt="Next"
          className="h-3 w-4 -scale-x-100"
        />
      </div>
    </Link>
  ) : (
    <span />
  )}
</div>

      </main>

     
      {/* RIGHT TOC + ACTIONS */}
<aside className="w-64 hidden xl:flex flex-col gap-6 px-6 py-10 sticky top-0 h-screen overflow-y-auto">
  
  {/* TOC SECTION */}
  <div className="bg-[#FDFDFD]">
    <div className="mb-4 p-6">
      <P className="font-semibold text-gray-900 uppercase text-xs tracking-wider">
        Contents
      </P>
    </div>

    {!isContentLoaded && (
      <div className="text-gray-400 text-sm animate-pulse">
        Loading table of contents...
      </div>
    )}

    {isContentLoaded && toc.length === 0 && (
      <P className="text-gray-400 text-sm">No headings found</P>
    )}

    {isContentLoaded && toc.length > 0 && (
      <nav>
        <ul className="space-y-1 text-sm border-l-2 border-gray-200">
          {toc.map(item => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              <a
                href={`#${item.id}`}
                className={`block py-1.5 px-3 -ml-[2px] border-l-2 transition-all duration-200 ${
                  activeId === item.id
                    ? "text-[#5551FF] border-[#5551FF] font-medium bg-blue-50/50"
                    : "text-gray-600 border-transparent hover:text-[#5551FF] hover:border-gray-300"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </div>

  {/* ACTION BUTTONS */}
  <div className="flex flex-col gap-4 mt-4">
    <button className="w-full py-3 rounded-lg shadow bg-white font-quicksand  font-medium flex flex-row items-center justify-center gap-2 hover:shadow-md transition">
      Listen  Now
      <img src="/PlayButton.png"  className=" h-5 w-5"/>
    </button>

    <button className="w-full py-3 rounded-lg shadow bg-white  font-quicksand font-medium flex flex-row  items-center justify-around    hover:shadow-md transition">
      Share Article 
       <img src="/LinkedIn.png"  className=" h-5 w-5"/>
            <img src="/Twitter.png"  className=" h-5 w-5"/>
    </button>
  </div>
</aside>
    </div>
  );
};

export default ResourceDoc;