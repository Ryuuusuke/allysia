import { useState } from "react";
import ResponsiveView from "./components/ResponsiveView";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative">
            {loading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    <p className="mt-4 text-lg">Loading...</p>
                </div>
            )}

            <ResponsiveView onReady={() => setLoading(false)} />
        </div>
    );
}

export default App;
