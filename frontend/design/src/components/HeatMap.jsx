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
    .then((res) => {
      console.log(
        "HEATMAP DATA:",
        res.data.data
      );

      setClicks(
        res.data.data || []
      );
    })
    .catch(console.error);
}, [sessionId]);

return ( 
  <div
   className="
     rounded-[32px]
     border
     border-white/10
     bg-white/[0.04]
     backdrop-blur-xl
     overflow-hidden
   "
 >
 <div
     className="
       p-6
       border-b
       border-white/10
       flex
       items-center
       justify-between
     "
   > <div>


      <h2 className="text-2xl font-bold text-white">
        Click Heatmap
      </h2>

      <p className="text-sm text-slate-400 mt-1">
        User interaction density
      </p>

    </div>

    <div
      className="
        px-4
        py-2
        rounded-xl
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

    <div className="flex gap-4">

      
      <div
        className="
          h-[550px]
          flex
          flex-col
          justify-between
          text-xs
          text-slate-500
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
            h-[550px]
            rounded-3xl
            overflow-hidden
            border
            border-slate-700
            bg-[#0f172a]
          "
        >

         
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]
            "
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-40
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.08) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.08) 1px,
                  transparent 1px
                )
              `,
              backgroundSize:
                "50px 50px",
            }}
          />

          {/* Center Guides */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/20" />

          <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-500/20" />

          {/* Heat Points */}
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
                    -translate-x-1/2
                    -translate-y-1/2
                    w-20
                    h-20
                    rounded-full
                    bg-cyan-400/30
                    blur-2xl
                  "
                />

                {/* Mid Glow */}
                <div
                  className="
                    absolute
                    -translate-x-1/2
                    -translate-y-1/2
                    w-10
                    h-10
                    rounded-full
                    bg-cyan-300/50
                    blur-lg
                  "
                />

        
                <div
                  className="
                    relative
                    w-4
                    h-4
                    rounded-full
                    bg-white
                    border-2
                    border-cyan-300
                  "
                  style={{
                    boxShadow:
                      "0 0 12px #fff, 0 0 30px #093f471d",
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

              <p className="text-slate-400 mt-2">
                User clicks will appear here
              </p>

            </div>
          )}

        </div>

      
        <div
          className="
            flex
            justify-between
            text-xs
            text-slate-500
            mt-3
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
