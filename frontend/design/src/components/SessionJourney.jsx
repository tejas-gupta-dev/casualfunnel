import {
  useEffect,
  useState,
} from "react";

import {
  getSessionEvents,
} from "../services/analytics";

const SessionJourney = ({
  sessionId,
}) => {
  const [events, setEvents] =
    useState([]);

  useEffect(() => {
    if (!sessionId) return;

    getSessionEvents(sessionId)
      .then((res) =>
        setEvents(res.data.events)
      )
      .catch(console.error);
  }, [sessionId]);

  const getEventStyle = (
    eventType
  ) => {
    switch (eventType) {
      case "page_view":
        return {
          dot: "bg-blue-400",
          badge:
            "bg-blue-500/20 text-blue-300 border-blue-500/30",
        };

      case "product_click":
        return {
          dot: "bg-purple-400",
          badge:
            "bg-purple-500/20 text-purple-300 border-purple-500/30",
        };

      case "add_to_cart":
        return {
          dot: "bg-emerald-400",
          badge:
            "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        };

      default:
        return {
          dot: "bg-pink-400",
          badge:
            "bg-pink-500/20 text-pink-300 border-pink-500/30",
        };
    }
  };

  return (
    <div
      className="
        h-[80vh]
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        overflow-hidden
      "
    >
      <div className="p-6 border-b border-white/10">

        <h2 className="text-2xl font-bold text-white">
          User Journey
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Complete session timeline
        </p>

      </div>

      <div className="p-6 overflow-y-auto h-[calc(80vh-90px)]">

        {!sessionId ? (
          <div className="h-full flex flex-col items-center justify-center">

            <div className="text-7xl mb-5">
              🛣️
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Select Session
            </h3>

            <p className="text-slate-400 mt-2">
              Journey timeline will appear here
            </p>

          </div>
        ) : (
          events.map((event, index) => {
            const style =
              getEventStyle(event.e);

            return (
              <div
                key={index}
                className="
                  relative
                  pl-10
                  pb-8
                  border-l
                  border-slate-700
                  ml-3
                "
              >

                {/* Timeline Dot */}
                <div
                  className={`
                    absolute
                    -left-[10px]
                    top-2
                    w-5
                    h-5
                    rounded-full
                    ${style.dot}
                    shadow-lg
                  `}
                />

                {/* Event Card */}
                <div
                  className="
                    bg-slate-900/70
                    border
                    border-white/5
                    rounded-2xl
                    p-4
                    hover:border-blue-500/30
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center justify-between mb-3">

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        border
                        ${style.badge}
                      `}
                    >
                      {event.e.replaceAll(
                        "_",
                        " "
                      )}
                    </span>

                    <span className="text-xs text-slate-500">
                      #{index + 1}
                    </span>

                  </div>

                  <div className="space-y-2">

                    <div>

                      <span className="text-slate-500 text-sm">
                        Page
                      </span>

                      <p className="text-white">
                        {event.p}
                      </p>

                    </div>

                    {event.pid && (
                      <div>

                        <span className="text-slate-500 text-sm">
                          Product
                        </span>

                        <p className="text-purple-300">
                          {event.pid}
                        </p>

                      </div>
                    )}

                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-500">

                    {new Date(
                      event.t
                    ).toLocaleString()}

                  </div>

                </div>

              </div>
            );
          })
        )}

        {sessionId &&
          events.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center">

              <div className="text-6xl mb-4">
                📭
              </div>

              <h3 className="text-xl text-white font-semibold">
                No Events Found
              </h3>

              <p className="text-slate-400 mt-2">
                This session has no recorded events
              </p>

            </div>
          )}

      </div>
    </div>
  );
};

export default SessionJourney;
