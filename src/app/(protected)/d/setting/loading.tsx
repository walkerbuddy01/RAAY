import React from "react";

function loading() {
  return (
    <div className="h-full w-full bg-[#2B2D31] p-4 rounded-lg ">
      <div className="flex gap-1 flex-col h-full w-full p-3 rounded-xl bg-[#313338] ">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className=" font-medium">ID</p>
          <p className="turncate text-sm  max-w-[280px] font-mono p-1bg-slate-100 rounded-md">
            loading...
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className=" font-medium">Name</p>
          <p className="turncate text-sm max-w-[280px] font-mono p-1bg-slate-100 rounded-md">
            loading...
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className=" font-medium">Email</p>
          <p className="turncate text-sm max-w-[280px] font-mono p-1bg-slate-100 rounded-md">
            loading...
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className=" font-medium">Total Feeders</p>
          <p className="turncate text-sm max-w-[280px] font-mono p-1bg-slate-100 rounded-md">
            loading...
          </p>
        </div>
      </div>
    </div>
  );
}

export default loading;
