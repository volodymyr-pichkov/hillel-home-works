import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchData = async ({ postId }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }
    return response.json();
  };

/* 
React Query v5 требует, чтобы функции, связанные с запросами, 
вызывались с одним объектом, а не с отдельными аргументами.
*/

const DataQuery = ({ postId }) => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["post", postId],
      queryFn: () => fetchData({ postId }),
    });
  
    if (isLoading) {
      return <div>Загрузка данных...</div>;
    }
  
    if (error) {
      return <div>Произошла ошибка при загрузке данных: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Детали</h1>
        <div>{data.title}</div>
      </div>
    );
  };

  const App = () => (
    <>
      <DataQuery postId={1} />
    </>
  );
  
  export default App;
