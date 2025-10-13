import { ArrowRight } from "lucide-react";

const FirstPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-12 md:py-20 px-8 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Lorem ipsum dolor, consectetur adipis
            </h1>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div>
              <button className="group bg-black px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors items-center inline-flex">
                CONTACT US
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Section */}
        <div className="relative grid gap-6 lg:grid-cols-[1fr_2fr_1fr] lg:gap-8">
          {/* Left Column - 2 Small Dashboards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Center Column - Large Dashboard */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <img
              src="/Products/Products7/MainImage.png"
              alt="Main dashboard with revenue analytics"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Column - 2 Small Dashboards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
