
export default function Refund({refundSuccess, setRefundSuccess, setShowRefundModal, setShowRefundStatus,setHostelAllocationMessage}) {
    return (
        <div style={{display: refundSuccess ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)] ">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pt-[20px] px-[30px] pb-[30px] w-[40%] ">

                <div className="flex justify-center w-full mb-[10px ">
                    <img src="/images/succcessful-payment.png" alt="Success Icon" className="h-[100px] " />
                </div>

                <h2 className="text-[24px] text-[#032900] font-[500] mb-[10px] text-center ">Refund is been Processed</h2>

                <p className="text-[#384237] font-[26px] mb-[40px] text-center ">Your refund request has been submitted and the amount will be refunded to your payment method within <b>48 hours</b>.</p>

                <div className="w-full flex justify-center mt-[20px] ">
                    <button onClick={()=> {
                        setShowRefundModal(false)
                        setRefundSuccess(false);
                        setShowRefundStatus(true);
                        setHostelAllocationMessage(false)
                    }} className='bg-[#101720] rounded-[16px] py-[12px] px-[10px] w-[300px] text-[#fff] '>Back to Dashboard</button>
                </div>
            </div>
        </div>
    )
}