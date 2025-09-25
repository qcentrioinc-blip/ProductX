import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const Enterprises = () => {
    return (
        <div className="min-h-screen bg-black text-white py-16 px-4">
            {/* Header Section*/}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <Typography variant="h3" className="text-lg md:text-xl font-bold mb-6 text-white text-center">
                    Itaque earum rerum hic tenetur a sapiente delectus
                </Typography>

                <Typography variant="h6" className="text-md md:text-lg text-gray-300 max-w-3xl leading-relaxed text-center">
                    From fast-moving startups to structured enterprises, Taskos adapts to your team's real-world workflows — not
                    the other way around.
                </Typography>
            </div>

            {/* Card Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 - Stay organized */}
                <Card className="bg-white text-black border-none h-96 rounded-xl shadow-lg">
                    <CardContent className="p-6">
                        <Typography variant="h5" component="h3" className="font-semibold mb-2 text-black text-xl">
                            Stay organized, effortlessly.
                        </Typography>
                        <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                            Easily track tasks, assignees, and statuses in one place.
                        </Typography>
                        <div className="bg-gray-200 rounded-lg h-48 w-full" />
                    </CardContent>
                </Card>

                {/* Card 2 - Built for fast-moving teams */}
                <Card className="bg-white text-black border-none h-96 rounded-xl shadow-lg">
                    <CardContent className="p-6">
                        <Typography variant="h5" component="h3" className="font-semibold mb-2 text-black text-xl">
                            Built for fast-moving teams.
                        </Typography>
                        <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                            Collaborate in real time with live edits and comments.
                        </Typography>
                        <div className="bg-gray-200 rounded-lg h-48 w-full" />
                    </CardContent>
                </Card>

                {/* Card 3 - Precision-Driven Portfolio Growth (top right) */}
                <Card className="bg-white text-black border-none h-96 rounded-xl shadow-lg">
                    <CardContent className="p-6">
                        <Typography variant="h5" component="h3" className="font-semibold mb-2 text-black text-xl">
                            Precision-Driven Portfolio Growth
                        </Typography>
                        <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                            View tasks as lists, boards, calendars, or timelines.
                        </Typography>
                        <div className="bg-gray-200 rounded-lg h-48 w-full" />
                    </CardContent>
                </Card>

                {/* Card 4 - Precision-Driven Portfolio Growth (bottom) */}
                <Card className="bg-white text-black border-none h-96 rounded-xl shadow-lg">
                    <CardContent className="p-6">
                        <Typography variant="h5" component="h3" className="font-semibold mb-2 text-black text-xl">
                            Precision-Driven Portfolio Growth
                        </Typography>
                        <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                            Let AI suggest assignments, priorities, and deadlines.
                        </Typography>
                        <div className="bg-gray-200 rounded-lg h-48 w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Enterprises
