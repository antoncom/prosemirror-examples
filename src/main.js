import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema, DOMParser } from 'prosemirror-model';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from 'prosemirror-example-setup';
import { schema } from 'prosemirror-schema-basic';

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
  marks: schema.spec.marks,
});

const myDoc = DOMParser.fromSchema(mySchema).parse(document.querySelector('#content'));

const myPlugins = exampleSetup({ schema: mySchema });

const myState = EditorState.create({
  doc: myDoc,
  plugins: myPlugins,
});


window.view = new EditorView(document.querySelector('#editor'), {
  state: myState,
});
