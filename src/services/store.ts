import * as vscode from "vscode";

export class Store {
  public ctx!: vscode.ExtensionContext;

  constructor(ctx: vscode.ExtensionContext) {
    this.ctx = ctx;
  }

  public register(command: string, fn: () => any) {
    const disposable = vscode.commands.registerCommand(command, fn);
    this.push(disposable);
  }

  private push(disposable: vscode.Disposable) {
    this.ctx.subscriptions.push(disposable);
  }
}
