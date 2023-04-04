import Head from "next/head";
import { Inter } from "next/font/google";

import { AiOutlinePlusCircle } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-center h-[calc(100vh - 83px)]">
          <AiOutlinePlusCircle className="text-7xl hover:text-white transition duration-150" />
          <p className="">Click the icon to add tasks</p>
        </div>
      </main>
    </>
  );
}
