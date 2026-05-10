import api from "./api";

export const events = ()=>api.get("/events");
