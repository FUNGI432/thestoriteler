const { build } = require('vite');

async function run() {
  try {
    await build({
      logLevel: 'silent',
    });
    console.log("SUCCESS");
  } catch (e) {
    console.log("VITE ERROR:");
    console.error(e);
  }
}
run();
