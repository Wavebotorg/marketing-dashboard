import React from "react";
import Image from "next/image";
import img from "../../assets/profile.PNG";
const LeaderBoard = () => {
  const students = [
    {
      Rank: "1",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "2",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "3",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "4",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "3",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "4",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    // Add more student data as needed
  ];

  return (
    <>
      <div className="md:flex md:justify-between gap-5 ">
        <div className="w-full">
          <p className="text-blue-400 text-3xl md:text-4xl font-medium w-auto  ">
            Leader Board
          </p>
          <div className="container">
            <div className="mt-6 rounded-lg overflow-hidden">
              <div className="bg-[#1C1C1C] text-white">
                <div className="grid grid-cols-4 bg-[#1788FB]">
                  <div className="px-4 py-2">Rank</div>
                  <div className="px-4 py-2">Name</div>
                  <div className="px-4 py-2">Invited by</div>
                  <div className="px-4 py-2">Points</div>
                </div>
                {/* Mapping over students data */}
                {students.map((student, index) => (
                  <div key={index} className="grid grid-cols-4">
                    <div className="px-4 py-2 ">{student.Rank}</div>
                    <div className="px-4 py-2">{student.Name}</div>
                    <div className="px-4 py-2">{student.Invitedby}</div>
                    <div className="px-4 py-2">{student.Points}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-blue-400 text-3xl md:text-4xl font-medium max-w-screen-lg w-96 ">
            Recent Joins
          </p>
          <div className="container">
            <div className="mt-6 rounded-lg overflow-hidden">
              <div className="bg-[#1C1C1C] text-white">
                {/* Mapping over students data */}
                {students.map((student, index) => (
                  <>
                    <div key={index} className="grid grid-cols">
                      <div className="p-5">
                        <div className="flex gap-2">
                          <div>
                            <Image
                              src={img}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          </div>
                          <div className="">
                            <div className="flex gap-2">
                              <p>abcd@gmail.com</p>
                              <p className="text-slate-600">6 min ago</p>
                            </div>
                            <div className="flex gap-2">
                              <p>Invited by</p>
                              <p>@luoluonuoy32321</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
