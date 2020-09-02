import { DarukServer, controller, injectable, get } from "daruk";

(async () => {
  const myapp = DarukServer();

  @injectable()
  @controller()
  class Index {
    @get("/")
    public async index(ctx: any) {
      ctx.body = "hello world";
    }
  }

  myapp.initOptions();
  await myapp.initPlugin();
  myapp.listen(3000);
})();
