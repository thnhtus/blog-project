import React, { useEffect } from "react";
import Image from "next/image";
import superagent from "superagent";

const HomePage: React.FC = () => {
  useEffect(() => {
    superagent.get("/api/user").then((res) => {
      console.log(res.body);
    });
  }, []);

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="h-[500px] overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1678905029621-d9f32962bbf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
            alt=""
            // fill
            className="object-center "
            width={1500}
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-6 p-10 w-[600px] absolute -bottom-16 left-16 bg-slate-50 rounded-lg">
          <span className="badge">Technology</span>
          <h1 className="text-[36px] font-semibold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex flex-row items-center gap-5 text-[#97989F]">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <Image
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1679056788786-243f3a141bd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  width={36}
                  height={36}
                />
              </div>
            </div>
            <span>Jason Francisco</span>
            <span>August 20, 2022</span>
          </div>
        </div>
      </div>
      <div className="mt-40 flex justify-center">
        <div className="border w-1/2 h-[100px] rounded-lg bg-[#E8E8EA] flex items-center justify-center">
          <span>Advertisement</span>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Latest Post</h1>
        <div>
          <button
            className="btn"
            onClick={() => {
              superagent
                .post("/api/user")
                .set("Content-Type", "application/json")
                .send({
                  email: "thanhtu3@gmail.com",
                  name: "thnhtu3",
                  address: "HCMC",
                })
                .then((res) => {
                  console.log(res);
                });
            }}
          >
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
