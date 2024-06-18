import React from "react";

interface AuthlayoutProps {
  children: React.ReactNode;
}

function Authlayout({ children }: Readonly<AuthlayoutProps>) {
  return (
    <div
      className="h-full w-full flex justify-center items-center bg-gray-300 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]
       dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1.5px,#00091d_1px)] dark:bg-[size:20px_20px] relative antialiased overflow-hidden"
    >
      {children}
    </div>
  );
}

export default Authlayout;
