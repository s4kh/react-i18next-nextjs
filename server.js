const express = require("express");
const next = require("next");
const path = require("path");
const cookieParser = require("cookie-parser");
const i18nextMiddleware = require("i18next-express-middleware");
const port = parseInt(process.env.PORT, 10) || 5200;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const i18n = require("./lib/hera/i18n");

i18n.on("initialized", () => {
  // These 2 does some logic on routes
  // const urlRewrite = new UrlRewriter(require("./route/routes"), i18n);
  // /* eslint-enable global-require */
  // urlRewrite.init();
  app.prepare().then(() => {
    const server = express();

    server.use(cookieParser());

    server.set("trust proxy", 1);

    server.use((req, res, nextHandler) => {
      req.boot = {
        // TODO: get from hostname
        lang: "fr",
        webId: "nd_1"
      };
      nextHandler();
    });

    // enable middleware for i18next
    server.use(i18nextMiddleware.handle(i18n));
    // serve locales for client
    server.use(
      "/locales",
      express.static(path.join(__dirname, "/lib/hera/locales"))
    );
    // missing keys
    server.post(
      "/locales/add/:lng/:ns",
      i18nextMiddleware.missingKeyHandler(i18n)
    );

    // Next.js handling for us
    server.get("*", (req, res) => handle(req, res));

    server.listen(port, serverErr => {
      if (serverErr) throw serverErr;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
});
