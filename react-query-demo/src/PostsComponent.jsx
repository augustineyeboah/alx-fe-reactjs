import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;