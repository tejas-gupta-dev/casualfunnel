import {
  useEffect,
  useState,
} from "react";

import {
  getHeatmap,
} from "../services/analytics";

const Heatmap = ({ sessionId }) => {
  const [clicks, setClicks] =
    useState([]);

  useEffect(() => {
    if (!sessionId) return;

    getHeatmap(sessionId)
      .then((res) =>
        setClicks(res.data.data)
      )
      .catch(console.error);
  }, [sessionId]);

  const heatSize =
    clicks.length < 20
      ? 120
      : clicks.length < 100
      ? 80
      : 50;

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        bg-white/[0.04]
        backdrop-blur-xl
        overflow-hidden
      "
    >
      <div className="p-6 border-b border-white/10 flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Click Heatmap
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            User interaction distribution
          </p>
        </div>

        <div
          className="
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-300
            text-sm
          "
        >
          {clicks.length} Clicks
        </div>

      </div>

      <div className="p-6">

        <div className="flex">

          
          <div
            className="
              h-[500px]
              flex
              flex-col
              justify-between
              text-xs
              text-slate-400
              pr-3
            "
          >
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>

        
          <div className="flex-1">

            <div
              className="
                relative
                h-[500px]
                rounded-3xl
                overflow-hidden
                border
                border-slate-500
                bg-gradient-to-br
                from-slate-100
                to-slate-300
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(207, 211, 212, 0.12),transparent_1%)]
                "
              />

            
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    `
                    linear-gradient(
                      rgba(182, 129, 129, 0.99) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      90deg,
                      rgba(189, 124, 124, 0.48) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize:
                    "50px 50px",
                }}
              />

              {clicks.map(
                (point, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform:
                        "translate(-50%, -50%)",
                    }}
                  >

                    
                    <div
                      className="
                        absolute
                        rounded-full
                        bg-cyan-300/45
                        blur-3xl
                      "
                      style={{
                        width: heatSize,
                        height: heatSize,
                      }}
                    />

                    
                    <div
                      className="
                        absolute
                        rounded-full
                        bg-sky-300/60
                        blur-xl
                      "
                      style={{
                        width:
                          heatSize / 2,
                        height:
                          heatSize / 2,
                      }}
                    />

                    
                    <div
                      className="
                        relative
                        w-5
                        h-5
                        rounded-full
                        bg-white
                        border-2
                        border-cyan-200
                      "
                      style={{
                        boxShadow:
                          "0 0 25px rgba(255,255,255,0.9), 0 0 50px rgba(34,211,238,0.8)",
                      }}
                    />

                  </div>
                )
              )}

              
              {clicks.length === 0 && (
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <div className="text-7xl mb-4">
                    🔥
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    No Heatmap Data
                  </h3>

                  <p className="text-slate-300 mt-2">
                    User click activity will appear here
                  </p>
                </div>
              )}

            </div>

            
            <div
              className="
                flex
                justify-between
                text-xs
                text-slate-400
                mt-3
                px-1
              "
            >
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Heatmap;