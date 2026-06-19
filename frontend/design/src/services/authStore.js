import { create } from "zustand";
import axios from "axios";
import { api } from "../api";



export const useAuthStore = create(
  (set) => ({
    user: JSON.parse(
      localStorage.getItem("user")
    ),

    loading: false,

    register: async (data) => {
      try {
        set({ loading: true });

        const res = await api.post(
          "users/register",
          data
        );

        localStorage.setItem(
          "user",
          JSON.stringify(res.data)
        );

        set({
          user: res.data,
          loading: false,
        });

        return true;
      } catch (err) {
        set({ loading: false });
        throw err;
      }
    },

    login: async (data) => {
      try {
        set({ loading: true });

        const res = await api.post(
          "users/login",
          data
        );

        localStorage.setItem(
          "user",
          JSON.stringify(res.data)
        );

        set({
          user: res.data,
          loading: false,
        });

        return true;
      } catch (err) {
        set({ loading: false });
        throw err;
      }
    },

    logout: () => {
      localStorage.removeItem("user");

      set({
        user: null,
      });
    },
  })
);