import {
  Box,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";


export default function Navbar({studentData}) {
  const { isOpen, onToggle } = useDisclosure();
  let firstName = studentData?.firstName.charAt(0);
  let lastName = studentData?.lastName.charAt(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);


  return (
    <Flex
      as="nav"
      position="sticky"
      top="0"
      left="0"
      right="0"
    >

      <Flex
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        className="lg:text-[#0A0A0A] lg:text-[18px] lg:h-[100vh] lg:font-[400] hidden lg:flex "
      >
        <VStack
          position="sticky"
          top={0}
          left={0}
          right={0}
          spacing={15}
          align="stretch"
          height="100%"
          display={{ base: "flex", md: "none" }}
          className="flex flex-col text-[#0A0A0A] text-left bg-[#101720] px-[20px] pb-[30px] pt-[50px] text-[18px] w-[300px] "
        >
            <Box className="relative w-[90%] mx-auto ">
              <img 
                src="/images/search.png" 
                alt="Search Icon" 
                className="absolute top-[50%] left-[7px] transform translate-y-[-50%] w-[20px] h-[20px] " 
              />

              <input type="text" placeholder="Search" className="bg-[#475467] py-[8px] pl-[35px] placeholder:text-[#fff] placeholder:text-[16px] rounded-[6px] outline-0 text-[#fff] w-full " />
            </Box>

          <a onClick={onToggle} href="/dashboard">
            <Box className={`flex items-center py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <img 
                src="/images/home-line.png" 
                alt="Home Icon"  
              />
              <p>Home</p>
            </Box>
          </a>

          <a onClick={onToggle} href="/dashboard/courses">
            <Box className={`flex items-center rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <img 
                src="/images/bar-chart-square-02.png" 
                alt="Courses Icon"  
              />
              <p>Courses</p>
            </Box>
          </a>

          <a onClick={onToggle} href="/dashboard/students">
            <Box className={`flex items-center rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <img 
                src="/images/users-01.png" 
                alt="User Icon"  
              />
              <p>Results</p>
            </Box>
          </a>

          <a onClick={onToggle} href="/dashboard/wallet" className=" mb-[100px] ">
            <Box className={`flex items-center rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <img 
                src="/images/layers-three-01.png" 
                alt="Wallet Icon"
              />
              <p>Payments</p>
            </Box>
          </a>

          <a onClick={onToggle} href="/dashboard/support">
            <Box className={`flex items-center rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <img 
                  src="/images/life-buoy-01.png" 
                  alt="Buoy Icon" 
              />
                <p>Support</p>
            </Box>
          </a>

          <a onClick={onToggle} href="/dashboard/setting" className=" mb-[20px] border-b-[#344054] border-b-[1px] pb-[20px] ">
            <Box className={`flex items-center rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <img 
                  src="/images/settings-01.png" 
                  alt="Settings Icon" 
              />
                <p>Setting</p>
            </Box>
          </a>

          <Box className="flex items-start gap-[5px] mt-auto ">
            <div className="flex items-center gap-[10px] text-[#fff] text-[14px]">
                <div className="w-[40px] h-[40px] bg-[#f5f5f5] text-[#000] flex items-center justify-center gap-[3px] rounded-[50%] uppercase font-[700] text-[22px]  ">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>

                <div>
                  <p className="text-[14px] font-[600] ">{studentData?.firstName} {studentData?.lastName}</p>
                  <p>{studentData?.email}</p>
                </div>
            </div>
            
            <Box className=" text-[20px] font-[600] cursor-pointer ">
              <img 
                src="/images/log-out-01.png"
                alt="Log Out Icon"
              />
            </Box>

          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}
