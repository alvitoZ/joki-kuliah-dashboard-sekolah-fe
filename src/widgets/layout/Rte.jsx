import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Image from "@tiptap/extension-image";
import { getMethod } from "@/service/auth";
import DialogPostImage from "./DialogPostImage";
import "./Rte.css";

const Rte = ({ childFunc, childData, index }) => {
  const extensions = [
    Image,
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
  ];

  // const [data, setData] = React.useState(``);
  const editor = useEditor({
    extensions: extensions,
    content: `${childData}`,
    onUpdate({ editor }) {
      childFunc(editor.getHTML(), index, childData);
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = (data) => {
    editor
      .chain()
      .focus()
      .setImage({
        src: data,
      })
      .run();
  };

  return (
    <div className="flex h-auto w-auto flex-col ">
      <div className="flex h-auto w-auto flex-row flex-wrap items-center justify-between gap-1 p-4">
        <DialogPostImage child={(data) => addImage(data)} />
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`border-2 border-black p-1 ${
            editor.isActive("bold") ? "bg-blue-400 text-white" : ""
          }`}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`border-2 border-black  p-1 ${
            editor.isActive("italic") ? "bg-blue-400 text-white" : ""
          }`}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`border-2 border-black   p-1 ${
            editor.isActive("strike") ? "bg-blue-400 text-white" : ""
          }`}
        >
          strike
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`border-2 border-black  p-1 ${
            editor.isActive("paragraph") ? "bg-blue-400 text-white" : ""
          }`}
        >
          paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="cursor-pointer border-2 border-black p-1 "
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="cursor-pointer border-2 border-black p-1"
        >
          redo
        </button>
      </div>
      <p>masukkan teks....</p>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Rte;
