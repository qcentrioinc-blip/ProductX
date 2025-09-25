import { Typography, Chip } from "@mui/material"

const Building = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Itaque earum rerum hic</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          From fast-moving startups to structured enterprises, Taskos adapts to your team's real-world workflows — not
          the other way around.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All", "Lorem", "Consectetur", "Accusamus", "Sed ut", "Aspernatur"].map((filter, index) => (
            <button
              key={filter}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - 50/50 Split */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side - Building Image (50%) */}
        <div className="lg:w-1/2 relative">
          <div className="h-full relative overflow-hidden">
            <img
              src="/Building.jpg"
              alt="Serenity Suites - Coastal Resort"
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6">
              <Typography
                variant="h6"
                className="text-white font-bold tracking-wide"
                sx={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                SERENITY SUITES - COASTAL RESORT
              </Typography>
            </div>
          </div>
        </div>

        {/* Right Side - Content (50%) */}
        <div className="lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center">
          {/* Tags */}
          <div className="flex gap-2 mb-8">
            <Chip label="Lorem" size="small" className="bg-gray-100 text-gray-700" />
            <Chip label="Aspernatur" size="small" className="bg-gray-100 text-gray-700" />
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-6 mb-12">
            <Typography variant="body1" className="text-gray-700 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Typography>

            <Typography variant="body1" className="text-gray-700 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Typography>

            <Typography variant="body1" className="text-gray-700 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Typography>
          </div>

          {/* Statistics */}
          <div className="flex gap-8">
            <div>
              <Typography variant="h2" className="text-4xl font-bold text-gray-900">
                45%
              </Typography>
            </div>
            <div>
              <Typography variant="h2" className="text-4xl font-bold text-gray-900">
                0.5x
              </Typography>
            </div>
            <div>
              <Typography variant="h2" className="text-4xl font-bold text-gray-900">
                2x
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Building

