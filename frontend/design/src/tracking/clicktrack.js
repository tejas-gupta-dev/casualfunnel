import {trackEvent} from "./Tracking";

export const initAnalytics = () => {

  document.addEventListener(
    "click",
    (e) => {

      const target = e.target;

      trackEvent("click", {
        tag: target.tagName,
        text: target.innerText?.slice(0, 100),
        id: target.id,
        page: window.location.pathname,

        x:
          (e.clientX / window.innerWidth) * 100,

        y:
          (e.clientY / window.innerHeight) * 100,
      });

    },
    true
  );

};