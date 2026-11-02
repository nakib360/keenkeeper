"use client"
import { Phone, MessageSquare, Video } from "lucide-react";

const QuickCheckIn = ({ userName }) => {
    const handleQuichCheckIn = medium => {
        const accessArray = JSON.parse(
            localStorage.getItem("timelineHistory") || "[]"
        )

        const newHistory = {
            medium: medium,
            name: userName,
            date: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }),
        }

        localStorage.setItem("timelineHistory", JSON.stringify([...accessArray, newHistory]));

        console.log("timelineHistory Updated");
    }
    return (
        <div>
            <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-sm font-semibold text-gray-800">Quick Check-In</h3>
                <div className="mt-3 grid grid-cols-3 gap-4 cursor-pointer">
                    {[
                        { label: "Call", Icon: Phone },
                        { label: "Text", Icon: MessageSquare },
                        { label: "Video", Icon: Video },
                    ].map(({ label, Icon }) => (
                        <button
                            key={label}
                            onClick={() => handleQuichCheckIn(label)}
                            className="border cursor-pointer rounded-lg py-4 flex flex-col items-center gap-2 text-xs text-gray-700 hover:bg-gray-50"
                        >
                            <Icon size={18} />
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickCheckIn;