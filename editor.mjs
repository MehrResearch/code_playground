import { EditorView, minimalSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { sql } from "@codemirror/lang-sql";
import { python } from "@codemirror/lang-python";

let lang_exts = {
  sql: sql,
  python: python,
};

document.querySelectorAll("pre code").forEach((code) => {
  // detect language based on element class, e.g. `lang-sql` or `lang-python`
  let classes = code.parentNode.className.split(" ");
  console.log(classes);
  let exts = [minimalSetup]
  for (let lang in lang_exts) {
    if (classes.includes(`lang-${lang}`)) {
      exts.push(lang_exts[lang]());
    }
  }

  let view = new EditorView({
    state: EditorState.create({
      doc: code.textContent,
      extensions: exts,
    }),
    parent: code.parentElement,
  });

  code.remove();
});
