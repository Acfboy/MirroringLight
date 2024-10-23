import { Application, Text } from "pixi.js";
import { msg } from 'message.js';

const app = new Application();
await app.init({width: 640, height: 360, background: 0xffffff});
document.body.append(app.canvas);

const text = new Text({
    text: msg(),
});

app.stage.addChild(text)