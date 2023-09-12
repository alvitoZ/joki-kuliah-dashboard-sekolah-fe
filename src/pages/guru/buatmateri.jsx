import { Card, CardBody, Input } from "@material-tailwind/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import "@mdxeditor/editor/style.css";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { InsertImage } from "@mdxeditor/editor";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import { imagePlugin } from "@mdxeditor/editor/plugins/image";
import { postMethod } from "@/service/auth";
import Swal from "sweetalert2";

export function BuatMateri() {
  const [data, setData] = React.useState({
    title: "",
    body: ``,
  });
  const sendData = (data) => {
    postMethod.PostMateri(data).then((res) => {
      Swal.fire(res.data.msg);
      setData({
        title: "",
        body: ``,
      });
    });
  };
  return (
    <Card className="h-full w-full overflow-y-auto">
      <CardBody className="flex flex-col gap-8 px-0 py-10">
        <div className="border-2 border-black py-6">
          <Input
            label="title"
            onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
          />
          <MDXEditor
            onChange={(e) =>
              setData({
                ...data,
                body: e,
              })
            }
            markdown={data.body}
            plugins={[
              imagePlugin({
                // imageUploadHandler: () => {
                //   return Promise.resolve("https://picsum.photos/200/300");
                // },
                imageAutocompleteSuggestions: ["https://picsum.photos/200"],
              }),
              toolbarPlugin({
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <InsertImage />
                    <BoldItalicUnderlineToggles />
                  </>
                ),
              }),
            ]}
          />
        </div>
        <button
          className="border-2 border-black bg-blue-600 text-yellow-600"
          onClick={() => sendData(data)}
        >
          post data
        </button>
      </CardBody>
    </Card>
  );
}

export default BuatMateri;
