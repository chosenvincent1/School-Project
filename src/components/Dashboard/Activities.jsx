
export default function Activities({studentData}) {
    let firstName = studentData?.firstName.charAt(0);
    let lastName = studentData?.lastName.charAt(0);
    
    return (
        <div className="lg:w-[30%] ">
            <h3 className="text-[18px] font-[600] mb-[20px] ">Recent Activities</h3>

            <div className="flex flex-col gap-[10px] ">
                <div className="flex items-center gap-[5px] ">
                    <div className="w-[40px] h-[40px] bg-[#000] text-[#fff] flex items-center justify-center gap-[3px] rounded-[50%] uppercase  ">
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>

                    <div className="text-[#344054]">
                        <p className="text-[14px] font-[500] "><span>{studentData?.firstName} <span>{studentData?.lastName}</span></span></p>
                        <p className="text-[14px] font-[400] ">made payment for <span className="text-[#6941C6]">School fees</span></p>
                    </div>
                </div>

                <div className="flex items-center gap-[5px] ">
                    <div className="w-[40px] h-[40px] bg-[#000] text-[#fff] flex items-center justify-center gap-[3px] rounded-[50%] uppercase  ">
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>

                    <div className="text-[#344054]">
                    <p className="text-[14px] font-[500] "><span>{studentData?.firstName} <span>{studentData?.lastName}</span></span></p>
                        <p className="text-[14px] font-[400] ">Registered all courses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}