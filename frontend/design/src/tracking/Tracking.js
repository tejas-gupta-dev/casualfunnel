import axios from "axios";
import { api } from "../api"
import { getSessionID } from "./GetSession";

const eventQueue = [];
const BATCH_SIZE = 20;
const FLUSH_INTERVAL = 5000; 

export const trackEvent = ( eventType,data = {}) => {
  eventQueue.push({
    s: getSessionID(),
    e: eventType,
    p: window.location.pathname,
    t: Date.now(),
    ...data,
  });

  console.log(eventQueue)

  if (eventQueue.length >= BATCH_SIZE) {
    flushEvents();
  }
};

const flushEvents = async () => {
  if (eventQueue.length === 0) return;

  const events = [...eventQueue];
  eventQueue.length = 0;

  try {
    await api.post(
      "/events/create",
      { events }
    );
  } catch (error) {
    console.error(error);

    eventQueue.unshift(...events);
  }
};


setInterval(flushEvents, FLUSH_INTERVAL);


window.addEventListener("beforeunload", () => {
  if (eventQueue.length === 0) return;

  const blob = new Blob(
    [
      JSON.stringify({
        events: eventQueue,
      }),
    ],
    {
      type: "application/json",
    }
  );

  navigator.sendBeacon(
    "http://localhost:3000/api/events/create",
    blob
  );
});

