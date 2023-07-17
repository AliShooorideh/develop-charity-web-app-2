import BottomSheet from "@/components/BottomSheet";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter()
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-3 rounded-b-full bg-[#b772e6] pb-20 pt-16">
        <div className="flex flex-col items-center text-3xl font-bold text-white">
          <span>LO</span>
          <span>GO</span>
        </div>
        <span className="text-5xl font-bold text-white">DONATE</span>
        <span className="text-white">Good Deeds Every Day</span>
      </div>
      <div className="mt-20 flex flex-col items-center px-10  ">
        <div className="space-y-8 w-full">
          <input
            className="w-full rounded-full border-2 border-[#b772e6] bg-transparent p-2 text-center"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Plase Enter your Email"
          />
          <div className="flex flex-col items-center space-y-1">
            <input
              className="w-full rounded-full border-2 border-[#b772e6] bg-transparent p-2 text-center"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Plase Enter your Password"
            />
            <span className="opacity-50">Forget Password ?</span>
          </div>
        </div>
        <div className="mt-36">
          <button onClick={() => router.push("/home")} className="bg-[#b772e6] text-white px-12 py-2 rounded-full">Log In</button>
        </div>
        <BottomSheet type="white" />
      </div>
    </div>
  );
};

export default Home;
//  b772e6
// ff5eaa
