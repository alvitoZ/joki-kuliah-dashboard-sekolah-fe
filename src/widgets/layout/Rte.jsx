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
  const [images, setImages] = React.useState([]);
  // const [image, setImage] = React.useState(``);
  React.useEffect(() => {
    getMethod.GetImages().then((res) => {
      setImages(res.data.data);
    });
  }, []);

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

  const content = "<p>Masukkan Teks disini.......</p>";

  // const [data, setData] = React.useState(``);
  const editor = useEditor({
    extensions: extensions,
    content: `<p>Masukkan Teks disini.......</p> 
    ${childData}`,
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
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`border-2 border-black  p-1 ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-400 text-white"
              : ""
          }`}
        >
          h1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`border-2 border-black  p-1 ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-400 text-white"
              : ""
          }`}
        >
          h2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`border-2 border-black  p-1 ${
            editor.isActive("heading", { level: 3 })
              ? "bg-blue-400 text-white"
              : ""
          }`}
        >
          h3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`border-2 border-black  p-1 ${
            editor.isActive("heading", { level: 4 })
              ? "bg-blue-400 text-white"
              : ""
          }`}
        >
          h4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`border-2 border-black  p-1 ${
            editor.isActive("heading", { level: 5 })
              ? "bg-blue-400 text-white"
              : ""
          }`}
        >
          h5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`border-2 border-black  p-1 ${
            editor.isActive("heading", { level: 6 })
              ? "bg-blue-400 text-white"
              : ""
          }`}
        >
          h6
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="border-2 border-black  p-1"
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="border-2 border-black  p-1"
        >
          redo
        </button>
      </div>
      <div className=" h-auto w-auto overflow-auto bg-brown-100 px-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Rte;
