import * as vscode from "vscode";

export const showInfo = (info: string) => {
  return vscode.window.showInformationMessage(info);
};
