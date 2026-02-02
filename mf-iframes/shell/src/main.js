import "./style.css";

const routes = [
  {
    path: "/",
    source: "http://localhost:8002/",
    name: "Home",
  },
  {
    path: "/products",
    source: "http://localhost:8004/",
    name: "Products",
  },
  {
    path: "/clients",
    source: "http://localhost:8001/",
    name: "Clients",
  },
];

const navIframe = document.getElementById("mf-nav");
const mfContainerIframe = document.getElementById("mf-container");
const actualPath = window.location.pathname;
const initialMf = routes.find((route) => route.path === actualPath);

if (initialMf) {
  mfContainerIframe.setAttribute("src", initialMf.source);
}

navIframe.onload = () => {
  navIframe.contentWindow.postMessage(
    { type: "INIT", routes },
    "http://localhost:8000"
  );
};

window.addEventListener("message", (event) => {
  if (event.data.type === "NAVIGATION") {
    const mfNavigationRoute = routes.find(
      (route) => route.path === event.data.route.path
    );

    if (!mfNavigationRoute) return;

    mfContainerIframe.setAttribute("src", mfNavigationRoute.source);
    window.history.pushState({}, "", mfNavigationRoute.path);
  }
});

window.addEventListener("popstate", () => {
  const pathPopState = window.location.pathname;

  const mfTargetPop = routes.find((route) => route.path === pathPopState);

  if (mfTargetPop) {
    window.history.pushState({}, "", mfTargetPop.path);
    mfContainerIframe.setAttribute("src", mfTargetPop.source);
  }
});
