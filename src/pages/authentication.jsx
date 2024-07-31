import { Outlet } from "react-router-dom";

export default function Authentication() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Authentication</h1>

        <Outlet />

        <h1>Footer</h1>
      </div>
    </>
  );
}
