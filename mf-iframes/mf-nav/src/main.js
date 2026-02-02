const navLinkList = document.getElementById("nav-list");

window.addEventListener("message", (event) => {
  if (event.data.type === "INIT") {
    const { routes } = event.data;
    routes.forEach((route) => {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.innerText = route.name;
      anchor.setAttribute("href", route.path);

      anchor.addEventListener("click", (anchorEvent) => {
        anchorEvent.preventDefault();
        window.parent.postMessage(
          { type: "NAVIGATION", route },
          "http://localhost:5173/"
        );
      });

      li.appendChild(anchor);
      navLinkList.appendChild(li);
    });
  }
});
