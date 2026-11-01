"use client"
import { Phone, MessageSquare, Video } from "lucide-react";

const QuickCheckIn = ({ userName }) => {
    const handleQuichCheckIn = medium => {
        
    }
    return (
        <div>
            <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-sm font-semibold text-gray-800">Quick Check-In</h3>
                <div className="mt-3 grid grid-cols-3 gap-4">
                    {[
                        { label: "Call", Icon: Phone },
                        { label: "Text", Icon: MessageSquare },
                        { label: "Video", Icon: Video },
                    ].map(({ label, Icon }) => (
                        <button
                            key={label}
                            className="border rounded-lg py-4 flex flex-col items-center gap-2 text-xs text-gray-700 hover:bg-gray-50"
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