import { FaEllipsisV } from 'react-icons/fa';

export default function Statistics({setShowHostelPayment,hostelAllocationMessage, setShowRefundMessage, showRefundStatus, showRefundModal, setShowRefundModal, studentData}) {


    function handleRefundModal(){
        setShowRefundModal(prev => {
            setShowRefundModal(!prev);
        })
    }

    return (
        <>
            <div className="mb-[30px] ">
                <h2 className="text-[30px] font-[600] text-[#000] ">Welcome {studentData?.firstName}</h2>
                <p className="text-[#475467] text-[16px] font-[400] "><span>{studentData?.department}</span> - <span className='uppercase'>{studentData?.matNo}</span></p>
            </div>

            <div className="text-[#000] grid grid-cols-1 gap-4 lg:grid-cols-3 mb-[35px] ">
                <div className="border-[1px] border-[#EAECF0] p-[20px] rounded-[12px] shadow "> 
                    <p className="text-[16px] font-[500] mb-[15px] ">Level</p>
                    <p className="text-[32px] font-[600] ">{studentData?.level}</p>
                </div>

                <div className="border-[1px] border-[#EAECF0] p-[20px] rounded-[12px] shadow flex items-start justify-between ">
                    <div>
                        <p className="text-[16px] font-[500] mb-[15px] ">Semester</p>
                        <p className="text-[32px] font-[600] ">{studentData?.semester}</p>
                    </div>
                </div>

                <div className="border-[1px] border-[#EAECF0] p-[20px] rounded-[12px] shadow flex items-start justify-between relative ">
                    <div>
                        <p className="text-[16px] font-[500] mb-[30px] ">Hostel Allocation</p>

                        {showRefundStatus ? 
                            (<p className='text-[18px] text-[orange] font-[500] '>Processing Refund</p>)
                            : hostelAllocationMessage ?
                                (<p className='text-[18px] text-[orange] font-[500] '>Waiting for Allocation</p>)
                            :
                            (<button onClick={()=> setShowHostelPayment(true)} className='bg-[#101720] rounded-[5px] py-[7px] px-[10px] shadow text-[#fff] '>Request Hostel</button>)
                        }
                        
                    </div> 

                    {hostelAllocationMessage && <div onClick={handleRefundModal} className=" cursor-pointer ">
                        <FaEllipsisV />
                    </div>}

                    <div style={{display: showRefundModal ? "block": "none"}} className='absolute top-[45px] right-[28px] h-[70px] shadow p-[30px] bg-[#f5f5f5] flex items-center rounded-[5px]  '>
                        <button onClick={()=> setShowRefundMessage(true)} className='bg-none '>Request for Refund</button>
                    </div>
                </div>
            </div>
        </>
    )
}