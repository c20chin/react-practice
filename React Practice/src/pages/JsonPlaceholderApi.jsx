import { Card, CardBody, CardTitle } from "react-bootstrap";
import useFetchJson from "../hooks/useFetchJson";
const JSONPlaceholderApi = () => {
  const { jsonData } = useFetchJson();
  
  
  return (
    <div>
      <h1>JSON Placeholder API</h1>

      <p>
        {jsonData.map((post) => (
          <Card key={post.title}>
            <CardTitle> {post.title}</CardTitle>
            <CardBody> {post.body} </CardBody>
          </Card>
        ))}
      </p>
    </div>
  );
};

export default JSONPlaceholderApi;
