import { getMethod } from "@/service/auth";
import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import ReactMarkdown from "react-markdown";

export function Materi() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getMethod.GetMateri().then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <Card className="h-full w-full overflow-y-auto">
      <CardBody className="mr-8 px-0 pb-2">
        {data.map(({ title, body }, i) => {
          return (
            <div key={i}>
              <div className=" text-4xl font-bold text-red-900">
                <h1 className="p-4">{title}</h1>
              </div>
              <div>
                <ReactMarkdown>{body}</ReactMarkdown>
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default Materi;
