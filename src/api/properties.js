// src/api/properties.js
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const fetchProperties = async (filters = {}) => {
  // filters: { price_gte, price_lte, rooms, type, location_like, _sort, _order }
  const params = { ...filters };
  const response = await axios.get(`${API_BASE}/properties`, { params });
  return response.data;
};

export const fetchPropertyById = async (id) => {
  const response = await axios.get(`${API_BASE}/properties/${id}`);
  return response.data;
};
