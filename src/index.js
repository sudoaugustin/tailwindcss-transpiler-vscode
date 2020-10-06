const vscode = require("vscode");
const { StatusBar, OutputChannel } = require("./components");
const { isTailwindFile, getRootPath, compileCSS } = require("../../src");

const getConfig = name => {
  const config = vscode.workspace.getConfiguration(`tailwindTranspiler.${name}`);
  return { get: name => config.get(name) };
};
const handleSuccess = () => {
  StatusBar.update("SUCCESS");
  OutputChannel.hide();
};
const handleError = err => {
  StatusBar.update("ERROR");
  OutputChannel.showError(err.toString());
};
const handleSave = ({ fileName: filePath }) => {
  if (!isTailwindFile(filePath)) return;
  StatusBar.update("WORKING");
  const config = getConfig();
  const paths = vscode.workspace.workspaceFolders.map(({ uri }) => uri.path);
  compileCSS({
    filePath,
    rootPath: getRootPath({
      filePath,
      paths,
    }),
    config: {
      savePath: config.get("savePath"),
      minifyCSS: config.get("minifyOutputFile"),
      tailwindPath: config.get("tailwindConfigPath"),
      browsersList: config.get("browsersList"),
    },
  })
    .then(handleSuccess)
    .catch(handleError)
    .finally(() => setTimeout(() => StatusBar.update(), 3000));
};

module.exports = {
  disposableCompileOnSave: null,
  activate: context => {
    StatusBar.mount();
    OutputChannel.mount();
    this.disposableCompileOnSave = vscode.workspace.onDidSaveTextDocument(handleSave);
    context.subscriptions.push(this.disposableCompileOnSave);
  },
  deactivate: () => {
    this.disposableCompileOnSave.dispose();
    StatusBar.unmount();
    OutputChannel.unmount();
  },
};
