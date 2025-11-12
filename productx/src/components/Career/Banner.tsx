import { useState } from "react"
import {  H2 } from "../../styles/Typography"
import BannerImage from "/Image3.jpg" // replace with your image

const Banner = () => {
  const slides = [
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="bg-[#C1D7F3] w-screen  text-[#2B68C3] py-20 px-6 md:px-16 flex flex-col items-center">
      <H2 className="mb-10 text-left w-full">Sed ut perspiciatis</H2>

      <div className="flex flex-col md:flex-row justify-between items-end gap-4 w-full">
        <div className="w-full md:w-3xl">
          <img
            src={BannerImage}
            alt="Banner"
            className="rounded-lg w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="w-full md:w-1/3">
          <p className="text-black text-sm md:text-base mb-6">
            {slides[activeIndex].text}
          </p>

          <div className="flex space-x-3 justify-start md:justify-end">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
