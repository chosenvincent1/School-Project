import { FaTimesCircle } from 'react-icons/fa'

export default function RefundMessage({showRefundMessage, setShowRefundMessage, setRefundSuccess}) {
    return (
        <div style={{display: showRefundMessage ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)] ">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pt-[20px] px-[30px] pb-[30px] w-[40%] ">
                <h2 className="text-[24px] text-[#032900] font-[500] mb-[10px] text-center "></h2>

                <form onSubmit={(e)=> {
                    e.preventDefault();
                    setShowRefundMessage(false);
                    setRefundSuccess(true);
                }} className="flex flex-col ">
                    <label htmlFor="" className="mb-[10px] font-[500] ">Why do you need a refund?</label>

                    <textarea 
                        name="" 
                        id="" 
                        placeholder="Enter text..." 
                        required
                        className="h-[200px] border-[1px] border-[#101720] outline-0 p-[15px] "
                    ></textarea>

                    <div className="w-full flex mt-[10px] ">
                        <button className='bg-[#101720] rounded-[4px] py-[12px] px-[10px] w-[200px] text-[#fff] '>Request Refund</button>
                    </div>
                </form>


            </div>
                <div onClick={()=> setShowRefundMessage(false)} className='absolute right-[25%] top-[15%] z-100 cursor-pointer '>
                    <FaTimesCircle className='text-[40px] text-[#fff] ' />
                </div>
        </div>
    )
}