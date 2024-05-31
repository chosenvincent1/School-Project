

export default function LearningMaterials() {
    return (
        <div className="lg:w-[70%] mb-[50px] lg:mb-0 ">
            <div className="flex items-center justify-between gap-[10px] mb-[20px] text-[#000] ">
                <h3 className="text-[18px] md:text-[25px] font-[700] ">Available learning materials for you</h3>

                <a className="text-[16px] font-[500] " href={'/dashboard/courses'}>View All</a>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3 ">
                <div className="shadow rounded-t-[12px] pb-[30px] ">
                    <img
                        src="/images/laptop.png" 
                        alt="Laptop" 
                        className="w-full h-auto mb-[10px] "
                    />


                    <div className="px-[15px] flex flex-col gap-[15px] ">
                        <h3 className="text-[18px] font-[600] text-[#101828] ">Database Management System (CSC 482.1)</h3>

                        <a href={""} className="px-[27px] py-[5px] rounded-[8px] bg-[#27779B] text-[#fff] text-[14px] font-[700] w-[100px] h-[38px] flex items-center justify-center ">Download</a>
                    </div>
                </div>

                <div className="shadow rounded-t-[12px] pb-[30px] ">
                    <img
                        src="/images/laptop.png" 
                        alt="Laptop" 
                        className="w-full h-auto mb-[10px] "
                    />

                    <div className="px-[15px] flex flex-col gap-[15px] ">
                        <h3 className="text-[18px] font-[600] text-[#101828] ">An Introduction to Enterprenuership (GES 400)</h3>

                        <a href={""} className="px-[27px] py-[5px] rounded-[8px] bg-[#27779B] text-[#fff] text-[14px] font-[700] w-[100px] h-[38px] flex items-center justify-center ">Download</a>
                    </div>
                </div>
            </div>
        </div>
    )
}