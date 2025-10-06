import { Card, CardContent, Typography, Button, Box, Slider } from "@mui/material"
import { Check, Info } from "lucide-react"

const Pricing = () => {
    return (
        <div className="min-h-screen bg-black text-white py-16 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Itaque earum rerum hic tenetur</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    From fast-moving startups to structured enterprises, Taskos adapts to your team's real-world workflows — not
                    the other way around.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Free Plan */}
                <Card className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden flex flex-col h-full" sx={{ backgroundColor: "#111827" }}>
                    <CardContent className="p-8 flex flex-col h-full">
                        <Typography variant="h5" className="text-white font-semibold mb-6">
                            Free
                        </Typography>

                        <div className="mb-8">
                            <Typography variant="h2" className="text-white font-bold text-5xl">
                                $0
                            </Typography>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <Typography className="text-white font-medium">400 Credits / month</Typography>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Up to 400 Tasks</Typography>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">1M character knowledge base</Typography>
                            </div>
                        </div>

                        <Button
                            variant="contained"
                            fullWidth
                            className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium mt-auto"
                            sx={{
                                backgroundColor: "#374151",
                                "&:hover": {
                                    backgroundColor: "#4B5563",
                                },
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            Sign up for free
                        </Button>
                    </CardContent>
                </Card>

                {/* Pro Plan */}
                <Card className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden flex flex-col h-full" sx={{ backgroundColor: "#111827" }}>
                    <CardContent className="p-8 flex flex-col h-full">
                        <Typography variant="h5" className="text-white font-semibold mb-6">
                            Pro
                        </Typography>

                        <div className="mb-8">
                            <Typography variant="h2" className="text-white font-bold text-5xl">
                                $49
                                <span className="text-2xl text-gray-400 font-normal">.99 / mo</span>
                            </Typography>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <Typography className="text-white font-medium">5,000 Credits</Typography>
                            </div>

                            <Box className="px-2">
                                <Slider
                                    value={20}
                                    disabled
                                    sx={{
                                        color: "#3B82F6",
                                        "& .MuiSlider-thumb": {
                                            backgroundColor: "#3B82F6",
                                            width: 16,
                                            height: 16,
                                        },
                                        "& .MuiSlider-track": {
                                            backgroundColor: "#3B82F6",
                                            border: "none",
                                        },
                                        "& .MuiSlider-rail": {
                                            backgroundColor: "#4B5563",
                                        },
                                    }}
                                />
                            </Box>
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Tasks: up to 5,000 per month</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Knowledge Base: up to 20M characters</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Premium actions</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Phone call basic features</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <Button
                            variant="contained"
                            fullWidth
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-auto"
                            sx={{
                                backgroundColor: "#2563EB",
                                "&:hover": {
                                    backgroundColor: "#1D4ED8",
                                },
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            Get Started ($49/month)
                        </Button>
                    </CardContent>
                </Card>

                {/* Business Plan */}
                <Card className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden flex flex-col h-full" sx={{ backgroundColor: "#111827" }}>
                    <CardContent className="p-8 flex flex-col h-full">
                        <Typography variant="h5" className="text-white font-semibold mb-6">
                            Business
                        </Typography>

                        <div className="mb-8">
                            <Typography variant="h2" className="text-white font-bold text-5xl">
                                $299
                                <span className="text-2xl text-gray-400 font-normal">.99 / mo</span>
                            </Typography>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <Typography className="text-white font-medium">30,000 Credits</Typography>
                            </div>

                            <Box className="px-2">
                                <Slider
                                    value={15}
                                    disabled
                                    sx={{
                                        color: "#3B82F6",
                                        "& .MuiSlider-thumb": {
                                            backgroundColor: "#3B82F6",
                                            width: 16,
                                            height: 16,
                                        },
                                        "& .MuiSlider-track": {
                                            backgroundColor: "#3B82F6",
                                            border: "none",
                                        },
                                        "& .MuiSlider-rail": {
                                            backgroundColor: "#4B5563",
                                        },
                                    }}
                                />
                            </Box>
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Tasks: up to 30,000 per month</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Knowledge Base: up to 20M characters</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Premium actions</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Phone call basic features</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <Typography className="text-gray-300">Priority support</Typography>
                                <Info className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <Button
                            variant="contained"
                            fullWidth
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-auto"
                            sx={{
                                backgroundColor: "#2563EB",
                                "&:hover": {
                                    backgroundColor: "#1D4ED8",
                                },
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            Get Started ($299/month)
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Pricing

