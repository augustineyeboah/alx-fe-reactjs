import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // get the dynamic id from the URL

  return <h2>Viewing Blog Post ID: {id}</h2>;
}

export default BlogPost;