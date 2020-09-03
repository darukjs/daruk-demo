import { DarukServer, controller, get } from "daruk";

(async () => {
  const myapp = DarukServer();

  @controller()
  class Index {
    @get("/")
    public async index(ctx: any) {
      ctx.body = "hello world";
    }
  }

  await myapp.binding();
  myapp.listen(3000);
})();
