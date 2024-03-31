import React from "react";

type Props = {};

export default function Team({}: Props) {
  return (
    <div className="">
      <div className="flex items-center justify-center text-center shadow-lg mb-5 bg-body rounded">
        <div className="flex flex-col p-2 m-2">
          <div className="text-3xl font-medium">
            อาจารย์ผู้รับผิดชอบหลักสูตร
          </div>
          <div className="text-sm mx-2 py-5 md:text-xl text-stone-500">
            หลักสูตรรัฐประศาสนศาสตร์ มีอาจารย์ผู้รับผิดชอบหลักสูตรทั้งหมด 6 ท่าน
            ดังนี้
          </div>
          {/* <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">
            Resource person of Tailblocks communinty
          </div> */}
          <div className="md:grid flex">
            <div className="flex items-center justify-center md:flex-row flex-col space-x-4 p-2">
              <div className="flex items-center justify-center flex-col px-6 py-2  max-w-7xl">
                {/* <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200"> */}
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    // src="https://source.unsplash.com/300x300/?man,businessman"
                    src="images/te.png"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-green-500 pt-5">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
                <div className=" italic text-gray-500">
                  การเปลี่ยนแปลงและการพัฒนาองค์การภาครัฐ
                </div>
                <div className=" italic text-gray-500">
                  การวางแผนและการบริหารนโยบายสาธาณะในยุคดิจิทัล
                </div>
              </div>
              <div className="flex items-center justify-center flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?boy"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400 pt-5">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
              </div>
              <div className="flex items-center justify-center flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400 pt-5">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
              </div>
            </div>
            <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
              <div className="flex items-center justify-center flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?kid"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400 pt-5">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
              </div>
              <div className="flex items-center justify-center flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400 pt-5">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
              </div>
              <div className="flex items-center justify-center flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?woman"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400 pt-5">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
                <div className=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
