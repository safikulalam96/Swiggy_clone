import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>Oops Something Went Wrong</h2>
      <h2>{err.data}</h2>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};
export default Error;
