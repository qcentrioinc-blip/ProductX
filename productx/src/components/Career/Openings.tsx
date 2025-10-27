import { H1 } from "../../styles/Typography"
import { Calendar, MapPin, Clock } from "lucide-react"

const Openings = () => {
  const jobs = [
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
  ]

  return (
    <div className="relative w-screen bg-black text-white py-20 px-6 md:px-20 ">
     
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:100px_100px] bg-[position:0_50px] opacity-50 pointer-events-none"></div>

    
      {/* Content */}
      <div className="relative z-10">
        <H1 className="mb-10">Sed ut perspiciatis</H1>

        <div className=" overflow-hidden">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`
                grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-5   border-gray-800 transition-colors duration-300
                ${index % 2 === 0 ? "hover:bg-gray-600/40" : "hover:bg-gray-800/40"}
              `}
            >
              
              <div className="font-semibold text-lg">{job.title}</div>

       
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={16} />
                <span>{job.type}</span>
              </div>
 
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={16} />
                <span>{job.exp}</span>
              </div>

              {/* Apply Button */}
              <div className="flex justify-start md:justify-end">
                <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Openings
