const mix = require("laravel-mix");

const tailwindcss = require("tailwindcss");
const { readdirSync, rmSync, existsSync } = require("fs");

const env = process.env;

const publicPath = "assets";

mix.setPublicPath(publicPath);
mix.setResourceRoot("/assets/");
mix.copyDirectory("src/images", publicPath + "/images");

mix.js("src/js/app.js", "js").autoload({ jQuery: ["$", "window.jQuery"]} );

mix.sass("src/css/app.scss", "css").options({
    postCss: [tailwindcss("./tailwind.config.js")],
});

mix.before(() => {
    if(existsSync(publicPath)) {
        readdirSync(publicPath).forEach((f) => {
            return rmSync(`${publicPath}/${f}`, {recursive: true});
        });
    }
});