import { useEffect, useState } from "react";
import { getSessions } from "../services/analytics";

const SessionList = ({ onSelect }) => {
const [sessions, setSessions] =
useState([]);

useEffect(() => {
getSessions()
.then((res) =>
setSessions(res.data.sessions)
)
.catch(console.error);
}, []);

return ( <div
   className="
     h-[700px]
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
       sticky
       top-0
       z-10
       p-6
       border-b
       border-white/10
       bg-black/20
       backdrop-blur-xl
     "
   > <div className="flex items-center justify-between">


      <div>

        <h2 className="text-2xl font-bold text-white">
          Live Sessions
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Active user journeys
        </p>

      </div>

      <div
        className="
          px-3
          py-1
          rounded-full
          bg-emerald-500/15
          border
          border-emerald-500/20
          text-emerald-300
          text-xs
          font-medium
        "
      >
        {sessions.length} Active
      </div>

    </div>
  </div>


  <div className="p-4 overflow-y-auto h-[calc(700px-88px)]">

    {sessions.map((session, index) => (
      <div
        key={session._id}
        onClick={() =>
          onSelect(session._id)
        }
        className="
          group
          relative
          overflow-hidden
          p-5
          rounded-3xl
          bg-slate-900/80
          border
          border-white/5
          mb-4
          cursor-pointer
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500/40
          hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
        "
      >
        
        <div
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-[4px]
            bg-gradient-to-b
            from-blue-500
            via-purple-500
            to-pink-500
            opacity-0
            group-hover:opacity-100
            transition
          "
        />

        <div className="relative z-10">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-xs text-slate-200 uppercase tracking-wider">
                Session
              </p>

              <h3 className="mt-1 text-white font-bold text-lg">
                #{session._id.slice(0, 8)}
              </h3>

            </div>

            <div className="flex items-center gap-2">

              <div
                className="
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-emerald-400
                  animate-pulse
                "
              />

              <span
                className="
                  text-xs
                  text-emerald-300
                "
              >
                Live
              </span>

            </div>

          </div>

          <div className="mt-5 flex items-center justify-between">

            <div>

              <p className="text-xs text-slate-200">
                Events
              </p>

              <p className="text-2xl font-bold text-blue-400">
                {session.totalEvents}
              </p>

            </div>

            <div className="text-right">

              <p className="text-xs text-slate-200">
                Session No.
              </p>

              <p className="text-white font-medium">
                #{index + 1}
              </p>

            </div>

          </div>

          <div
            className="
              mt-4
              pt-4
              border-t
              border-white/5
            "
          >

            <p className="text-xs text-slate-200">
              Last Active
            </p>

            <p className="text-sm text-slate-100 mt-1">
              {new Date(
                session.lastActivity
              ).toLocaleString()}
            </p>

          </div>

        </div>

      </div>
    ))}

    {sessions.length === 0 && (
      <div
        className="
          h-full
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <div className="text-7xl mb-4">
          📊
        </div>

        <h3 className="text-xl font-semibold text-white">
          No Sessions Found
        </h3>

        <p className="text-slate-400 mt-2">
          User activity will appear here
        </p>
      </div>
    )}

  </div>
</div>

);
};

export default SessionList;


// import { useEffect, useState } from "react";
// import { getSessions } from "../services/analytics";

// const SessionList = ({ onSelect }) => {
//   const [sessions, setSessions] =
//     useState([]);

//   useEffect(() => {
//     getSessions()
//       .then((res) =>
//         setSessions(res.data.sessions)
//       )
//       .catch(console.error);
//   }, []);

//   return (
//     <div
//       className="
//         h-[80vh]
//         rounded-[32px]
//         border
//         border-white/10
//         bg-white/[0.04]
//         backdrop-blur-xl
//         overflow-hidden
//       "
//     >

      
//       <div className="sticky top-0 z-10 p-6 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">

//         <div className="flex items-center justify-between">

//           <div>

//             <h2 className="text-2xl font-bold text-white">
//               Live Sessions
//             </h2>

//             <p className="text-sm text-slate-400 mt-1">
//               Active user journeys
//             </p>

//           </div>

//           <div
//             className="
//               px-3
//               py-1
//               rounded-full
//               bg-emerald-900
//               border
//               border-emerald-500/30
//               text-emerald-300
//               text-xs
//             "
//           >
//             {sessions.length} Active
//           </div>

//         </div>

//       </div>

//       <div className="p-4 overflow-y-auto h-[calc(80vh-90px)]">

//         {sessions.map((session) => (
//           <div
//             key={session._id}
//             onClick={() =>
//               onSelect(session._id)
//             }
//             className="
//               group
//               relative
//               overflow-hidden
//               p-5
//               rounded-3xl
//               bg-gradient-to-r from-slate-410 to-slate-900
              
//               border
//               border-white/5
//               mb-4
//               cursor-pointer
//               transition-all
//               duration-300
//               hover:border-blue-500/50
//               hover:-translate-y-1
//               hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
//             "
//           >

            
//             <div
//               className="
//                 absolute
//                 inset-0
//                 opacity-0
//                 group-hover:opacity-100
//                 transition
//                 bg-gradient-to-r
//                 from-blue-500/5
//                 to-purple-500/5
//               "
//             />

//             <div className="relative z-10">

//               <div className="flex justify-between items-start">

//                 <div>

//                   <p className="text-xs text-slate-500 mb-1">
//                     SESSION ID
//                   </p>

//                   <h3 className="font-bold text-white tracking-wide">
//                     #{session._id.slice(0, 8)}
//                   </h3>

//                 </div>

//                 <div
//                   className="
//                     w-3
//                     h-3
//                     rounded-full
//                     bg-emerald-400
//                     animate-pulse
//                   "
//                 />

//               </div>

//               <div className="mt-5 flex items-center justify-between">

//                 <div>

//                   <p className="text-xs text-slate-500">
//                     Events
//                   </p>

//                   <p className="text-xl font-bold text-blue-400">
//                     {session.totalEvents}
//                   </p>

//                 </div>

//                 <div className="text-right">

//                   <p className="text-xs text-slate-500">
//                     Last Active
//                   </p>

//                   <p className="text-sm text-slate-300">
//                     {new Date(
//                       session.lastActivity
//                     ).toLocaleDateString()}
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>
//         ))}

//         {sessions.length === 0 && (
//           <div
//             className="
//               h-full
//               flex
//               flex-col
//               items-center
//               justify-center
//             "
//           >

//             <div className="text-6xl mb-4">
//               📊
//             </div>

//             <h3 className="text-xl font-semibold text-white">
//               No Sessions Found
//             </h3>

//             <p className="text-slate-400 mt-2">
//               User activity will appear here
//             </p>

//           </div>
//         )}

//       </div>

//     </div>
//   );
// };

// export default SessionList;
