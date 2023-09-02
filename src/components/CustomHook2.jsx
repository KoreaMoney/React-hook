import React from "react";
import { useFetch } from "./customHooks/useFetch";
/**
 * @returns kimdowon 김도원 23.09.02.
 * 커스텀 훅은 중복된 기능 또는 코드들의 사용을 줄이기 위해 진행
 * 폭발적인 재 사용성을 증가시킨다.
 */
const BASEURL = "https://jsonplaceholder.typicode.com";

const CustomHook2 = () => {
  const { data, apiUrl } = useFetch(BASEURL, "users");

  return (
    <div>
      <h1>데이터를 가져오는 커스텀 훅</h1>
      <button onClick={() => apiUrl("users")}>Users</button>
      <button onClick={() => apiUrl("posts")}>Posts</button>
      <button onClick={() => apiUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CustomHook2;
