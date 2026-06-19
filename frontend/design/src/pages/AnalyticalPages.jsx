import { useState } from "react";
import SessionList from "../components/SessionList";
import SessionJourney from "../components/SessionJourney";
import Heatmap from "../components/Heatmap";
import Navbar from "../components/Navbar";

const Analytics = () => {
const [sessionId, setSessionId] =
useState(null);

return (
<> <Navbar />

```
  <div className="min-h-screen bg-[#010108] text-white relative overflow-hidden">

    
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[180px]" />

      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-900/10 rounded-full blur-[100px]" />

    </div>

    <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-8">

      <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 mb-10">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-emerald-300 font-medium">
            Real Time Tracking Active
          </span>

        </div>

        <h1 className="text-7xl font-black leading-none">

          Casual

          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Funnel
          </span>

        </h1>

        <p className="mt-6 text-slate-400 text-xl max-w-3xl">
          Track user behavior, clicks,
          journeys and conversions with a
          modern analytics experience.
        </p>

      </div>

      {!sessionId ? (
        <div className="grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-4">

            <SessionList
              onSelect={setSessionId}
            />

          </div>

          <div className="col-span-12 lg:col-span-8">

            <div className="h-[80vh] rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center">

              <div className="text-center">

                <div
                  className="
                    w-32
                    h-32
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500/20
                    to-purple-500/20
                    flex
                    items-center
                    justify-center
                    text-6xl
                    mx-auto
                    mb-8
                  "
                >
                  📊
                </div>

                <h2 className="text-5xl font-bold">
                  Explore Sessions
                </h2>

                <p className="text-slate-400 mt-4 text-lg max-w-md">
                  Select a session to inspect
                  journeys, user actions and
                  heatmaps.
                </p>

              </div>

            </div>

          </div>

        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-8">

            <button
              onClick={() =>
                setSessionId(null)
              }
              className="
                px-6 py-3 rounded-2xl
                bg-white/5
                border border-white/10
                hover:border-blue-500
                hover:bg-blue-500/10
                transition-all
              "
            >
              ← All Sessions
            </button>

            <div className="flex items-center gap-3">

              <div className="px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/20 text-blue-300">
                Session Analysis
              </div>

              <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/20 text-emerald-300">
                Live Tracking
              </div>

            </div>

          </div>

          
          <div className="grid grid-cols-12 gap-6">

            <div className="col-span-12 xl:col-span-3">
              <SessionList
                onSelect={setSessionId}
              />
            </div>

            <div className="col-span-12 xl:col-span-9">
              <SessionJourney
                sessionId={sessionId}
              />
            </div>

          </div>

          {/* Heatmap Full Width */}
          <div className="mt-6">
            <Heatmap
              sessionId={sessionId}
            />
          </div>

        </>
      )}

    </div>

  </div>
</>

);
};

export default Analytics;

