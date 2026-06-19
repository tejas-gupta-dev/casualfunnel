import { api } from "../api";

export const getSessions = () =>
  api.get("/events/sessioneventcount");

export const getSessionEvents = (sessionId) =>
  api.get(`/events/events/${sessionId}`);

export const getHeatmap = (sessionId) =>
  api.get(`/events/click-data?sessionId=${sessionId}`);