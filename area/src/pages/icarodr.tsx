import Head from "next/head";
import Image from "next/image";
import { Sidebar } from "../components/Sidebar";

export default function Miura() {
  return (
    <>
      <Head>
        <title>Icaro Duarte</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className="w-full h-2 bg-gray-50">
        <Image
          width={100}
          height={100}
          alt="img"
          className="h-full w-full object-cover"
          src="/bosch_faixa.svg"
        />
      </div>
      <div className="absolute p-4 sm:ml-64 z-50">
        <div className="py-4 px-10 rounded-lg">
          <div className="grid grid-cols-8 mb-8 gap-10">
            <div className="flex items-center justify-start">
              <Image
                width={100}
                height={100}
                alt="img"
                src=""
                className="max-h-full p-1 bg-blue-200 rounded-full"
              />
            </div>
            <div className="col-span-7 flex flex-col justify-center items-start h-36">
              <a
                className="text-3xl font-bold"
                target={"_blank"}
              >
                Icaro Thiago Sant'Ana Duarte
              </a>
              <p className="text-2xl">20 years old</p>
              <div className="flex gap-3 mt-6">
                <a href="https://github.com/icarodr" target="_blank">
                  <Image
                    width={100}
                    height={100}
                    src="/brand-github.svg"
                    className="flex items-center p-2 w-12 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300 hover:shadow cursor-pointer"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/icarothiago/"
                  target="_blank"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/brand-linkedin.svg"
                    className="flex items-center p-2 w-12 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300 hover:shadow cursor-pointer"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="h-48 py-4">
            <h2 className="mb-2 text-2xl font-bold">Education ????</h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside">
              <li>
                Technical Eletronics | Bento Quirino
                | 2019 - 2021
              </li>
              <li>
                System development | Senai Roberto Mange |
                2022 - 2023
              </li>
              <li> SoftwareSoftware Engineering  | UniMetrocamp | 2023 - 2027</li>
            </ul>
          </div>

          <div className="h-48 py-4">
            <h2 className="mb-2 text-2xl font-bold">Hobbies ??????</h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside">
              <li>Basketball</li>
              <li>Music (Guitar, Piano and Bass)</li>
              <li>Gym</li>
              <li>Gaming</li>
            </ul>
          </div>

          <div className="h-48 py-4">
            <h2 className="mb-2 text-2xl font-bold">WHAT I'M STUDYING ???? </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside">
              <li>Web Development</li>
              <li>AI</li>
              <li>Mobile Development (Flutter)</li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-2 text-2xl font-bold">Projects ????</h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside">
              <li>
                <strong>Compartilhando Sucessos</strong> - A web-platform to run
                the program &quot;Compartilhando Sucessos&quot;, an event made by
                GS/OIS-LA and C/FIO-LA.
              </li>
              <li>
                <strong>Bosch View</strong> - A Website aims to help the ETS managers and new students.
              </li>
              <li>
                <strong>Autonomous Robot</strong> - Autonomus robot created to solve logistic problems
              </li>
              <li>
                <strong>Virtual Assistant</strong> - TCC project currently in development
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        width={100}
        height={100}
        className="absolute top-0 w-full h-full z-0 opacity-20"
        src="bg-2.svg"
        alt=""
      />
    </>
  );
}
