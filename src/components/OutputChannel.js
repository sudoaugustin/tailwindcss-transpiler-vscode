const vscode = require("vscode");
module.exports = () => {
  let Channel = null;
  const mount = () => {
    Channel = vscode.window.createOutputChannel("Tailwind Transpiler");
    Channel.show();
  };
  const showError = msg => {
    Channel.show(true);
    Channel.appendLine(msg);
  };
  const hide = () => Channel.hide();
  const unmount = () => {
    Channel.dispose();
    Channel = null;
  };
  return { mount, showError, hide, unmount };
};
