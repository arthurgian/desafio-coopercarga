import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/products", "ProductController.index");
  Route.get("/products/:id", "ProductController.show");
}).prefix("/api");
