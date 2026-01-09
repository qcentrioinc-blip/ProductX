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
import { ArrowLeft, ArrowRight } from "lucide-react";




type Params = {
  industry: string;
  category: keyof typeof resourceConfig;
  slug?: string;
};

type TocItem = {
  id: string;
  text: string;
};

const ResourceDoc: React.FC = () => {
  const { industry, category, slug } = useParams<Params>();
  const navigate = useNavigate();

  const contentRef = useRef<HTMLDivElement>(null);

  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  /* ---------------------------------------------
     Resolve category + items
  --------------------------------------------- */
  const categoryConfig = category ? resourceConfig[category] : undefined;
  const items = categoryConfig?.items ?? [];

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
  const currentIndex = items.findIndex(i => i.slug === slug);
  const currentItem = items[currentIndex];

  /* ---------------------------------------------
     FIXED: Use a key to force re-mount on slug change
  --------------------------------------------- */
  const ContentComponent = useMemo(() => {
    if (!currentItem) return null;
    return React.lazy(currentItem.component);
  }, [currentItem?.slug]); // This triggers re-creation when slug changes

  /* ---------------------------------------------
     FIXED: Reset TOC when slug changes
  --------------------------------------------- */
  useEffect(() => {
    setToc([]);
    setActiveId("");
  }, [slug]);

  /* ---------------------------------------------
     FIXED: Build TOC after content loads with delay
  --------------------------------------------- */
  useEffect(() => {
    if (!ContentComponent || !slug) return;

    // Wait for content to fully render
    const timeoutId = setTimeout(() => {
      const container = contentRef.current;
      if (!container) return;

 const headings = Array.from(
  container.querySelectorAll("h1, h2, h3")
) as HTMLHeadingElement[];



      if (headings.length === 0) {
        setToc([]);
        return;
      }

      const tocItems: TocItem[] = headings.map(h => {
        if (!h.id) {
          h.id =
            h.textContent
              ?.toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "") || "";
        }
        return { id: h.id, text: h.textContent || "" };
      });

      setToc(tocItems);

      // Set up intersection observer for scroll spy
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0.5 }
      );

      headings.forEach(h => observer.observe(h));

      return () => observer.disconnect();
    }, 100); // Small delay to ensure content is rendered

    return () => clearTimeout(timeoutId);
  }, [ContentComponent, slug]); // Re-run when slug changes

  /* ---------------------------------------------
     Render
  --------------------------------------------- */
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      {/* LEFT NAV */}
     <aside className="w-64 bg-[#FAFAFA]/25 px-6 py-8 sticky top-0 h-screen overflow-y-auto border-r border-gray-200 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.08)]">

        {Object.entries(resourceConfig).map(([key, cat]) => (
          <div key={key} className="mb-6">
            <H4 className="mb-2 "> 
              {cat.label}
           </H4>

            {cat.items.map(item => (
              <Link
                key={item.slug}
                to={`/industries/${industry}/resources/${key}/${item.slug}`}
               className={`relative block text-md py-1 font-quicksand font-medium rounded px-3 transition-colors
  ${slug === item.slug
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
    <main className="flex-1 bg-white shadow-2xl m-10 rounded-2xl px-14 py-10 max-w-4xl   ">

        {/* Breadcrumb */}
        <div className=" not-[]: font-quicksand text-[#5551FF] mb-6">
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

        {/* FIXED: Add key prop to force re-mount */}
        <Suspense 
          key={slug} 
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="animate-pulse text-gray-500">Loading content...</div>
            </div>
          }
        >
          <div ref={contentRef} className="prose prose-lg  max-w-none">
            {ContentComponent && <ContentComponent />}
          </div>
        </Suspense>

        {/* PREV / NEXT */}
        <div className="flex justify-between mt-20 pt-6 border-t border-gray-300">
          {items[currentIndex - 1] ? (
            <Link
              to={`/industries/${industry}/resources/${category}/${items[currentIndex - 1].slug}`}
              className="text-sm text-blue-600 font-quicksand text-[18px] flex flex-row gap-2 hover:text-blue-800 font-medium transition-colors"
            >
              <ArrowLeft/>{items[currentIndex - 1].label}
            </Link>
          ) : (
            <span />
          )}

          {items[currentIndex + 1] && (
            <Link
              to={`/industries/${industry}/resources/${category}/${items[currentIndex + 1].slug}`}
              className="text-sm text-blue-600 font-quicksand text-[18px] flex flex-row  hover:text-blue-800 font-medium transition-colors"
            >
              {items[currentIndex + 1].label} <ArrowRight />
            </Link>
          )}
        </div>
      </main>

      {/* RIGHT TOC */}
      <aside className="w-64 hidden xl:block px-6 py-10 sticky top-0 h-screen overflow-y-auto">
        <P>
          On This Page
       </P>

        {toc.length > 0 ? (
          <ul className="space-y-2 text-sm">
            {toc.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block py-1 px-2 rounded transition-colors ${
                    activeId === item.id
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <P>  No headings found</P>
        )}
      </aside>
    </div>
  );
};

export default ResourceDoc;