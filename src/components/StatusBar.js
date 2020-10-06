const vscode = require("vscode");
module.exports = () => {
  let Item = null;
  const mount = () => {
    Item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 200);
    update();
    Item.show();
  };
  const update = state => {
    const prefix = "Tailwind Transpiler : ";
    switch (state) {
      case "WORKING":
        setProps({
          text: `${prefix} $(loading)`,
          color: "inherit",
        });
        break;
      case "SUCCESS":
        setProps({
          text: `${prefix} $(check)`,
          color: "#4FD1C5",
        });
        break;
      case "ERROR":
        setProps({
          text: `${prefix} $(error)`,
          color: "#ff0033",
        });
        break;
      default:
        setProps({
          text: `${prefix} $(telescope)`,
          color: "inherit",
        });
        break;
    }
  };
  const unmount = () => {
    Item.dispose();
    Item = null;
  };
  const setProps = props => Object.entries(props).forEach(([name, value]) => (Item[name] = value));
  return { mount, unmount, update };
};
