import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { sql } from "@codemirror/lang-sql";

document.querySelectorAll("pre code").forEach((code) => {
  let view = new EditorView({
    state: EditorState.create({
      doc: code.textContent,
      extensions: [basicSetup, sql()],
    }),
    parent: code.parentElement,
  });
  code.remove();
});
