import * as nls from "vscode-nls";

const localyze = nls.loadMessageBundle();

export const _t = (info: string, message: string) => {
  return localyze(info, message);
};
