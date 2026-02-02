const routes = [
  { path: "/", module: "mfe-busca" },
  { path: "/pedidos", module: "mfe-pedidos" },
];

const app = document.getElementById("app");

document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", async function (event) {
    event.preventDefault();
    const path = this.getAttribute("href");
    const targetMfe = routes.find((route) => route.path === path);

    const { render } = await import(targetMfe.module);

    render(app);
  });
});
