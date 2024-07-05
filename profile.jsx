import man from '../assets/man.png'
import cert from '../assets/cert.png'

const Profile = () => {
  return (
    <div className="relative">
      <div className="bg-[#D9D9D9] w-full h-36 p-4">
      </div>
      <div className="absolute top-full left-6 transform -translate-y-1/2 -translate-x-1/8 w-24 h-24 bg-[#ffffff] rounded-full">
        <img src={man}></img>
      </div>
      <div className="absolute top-7 left-6">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.125 16.5H6.875" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5 26.125L6.875 16.5L16.5 6.875" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div className="absolute top-7 right-6 flex items-center">
        <div className="w-10 h-10 bg-[#ffffff] rounded-full flex justify-center items-center">
          <svg className="w-6 h-6 text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="w-10 h-10 bg-[#ffffff] rounded-full flex justify-center items-center ml-3">
          <svg width="24" height="24" className="w-6 h-6 text-gray-500 mt-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="w-10 h-10 bg-[#ffffff] rounded-full flex justify-center items-center ml-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.22 2H11.78C11.2496 2 10.7409 2.21071 10.3658 2.58579C9.99072 2.96086 9.78 3.46957 9.78 4V4.18C9.77964 4.53073 9.68706 4.87519 9.51154 5.17884C9.33602 5.48248 9.08374 5.73464 8.78 5.91L8.35 6.16C8.04596 6.33554 7.70108 6.42795 7.35 6.42795C6.99893 6.42795 6.65404 6.33554 6.35 6.16L6.2 6.08C5.74107 5.81526 5.19584 5.74344 4.684 5.88031C4.17217 6.01717 3.73555 6.35154 3.47 6.81L3.25 7.19C2.98526 7.64893 2.91345 8.19416 3.05031 8.706C3.18717 9.21783 3.52154 9.65445 3.98 9.92L4.13 10.02C4.43228 10.1945 4.68362 10.4451 4.85905 10.7468C5.03448 11.0486 5.1279 11.391 5.13 11.74V12.25C5.1314 12.6024 5.03965 12.949 4.86405 13.2545C4.68844 13.5601 4.43521 13.8138 4.13 13.99L3.98 14.08C3.52154 14.3456 3.18717 14.7822 3.05031 15.294C2.91345 15.8058 2.98526 16.3511 3.25 16.81L3.47 17.19C3.73555 17.6485 4.17217 17.9828 4.684 18.1197C5.19584 18.2566 5.74107 18.1847 6.2 17.92L6.35 17.84C6.65404 17.6645 6.99893 17.5721 7.35 17.5721C7.70108 17.5721 8.04596 17.6645 8.35 17.84L8.78 18.09C9.08374 18.2654 9.33602 18.5175 9.51154 18.8212C9.68706 19.1248 9.77964 19.4693 9.78 19.82V20C9.78 20.5304 9.99072 21.0391 10.3658 21.4142C10.7409 21.7893 11.2496 22 11.78 22H12.22C12.7504 22 13.2591 21.7893 13.6342 21.4142C14.0093 21.0391 14.22 20.5304 14.22 20V19.82C14.2204 19.4693 14.3129 19.1248 14.4885 18.8212C14.664 18.5175 14.9163 18.2654 15.22 18.09L15.65 17.84C15.954 17.6645 16.2989 17.5721 16.65 17.5721C17.0011 17.5721 17.346 17.6645 17.65 17.84L17.8 17.92C18.2589 18.1847 18.8042 18.2566 19.316 18.1197C19.8278 17.9828 20.2645 17.6485 20.53 17.19L20.75 16.8C21.0147 16.3411 21.0866 15.7958 20.9497 15.284C20.8128 14.7722 20.4785 14.3356 20.02 14.07L19.87 13.99C19.5648 13.8138 19.3116 13.5601 19.136 13.2545C18.9604 12.949 18.8686 12.6024 18.87 12.25V11.75C18.8686 11.3976 18.9604 11.051 19.136 10.7455C19.3116 10.4399 19.5648 10.1862 19.87 10.01L20.02 9.92C20.4785 9.65445 20.8128 9.21783 20.9497 8.706C21.0866 8.19416 21.0147 7.64893 20.75 7.19L20.53 6.81C20.2645 6.35154 19.8278 6.01717 19.316 5.88031C18.8042 5.74344 18.2589 5.81526 17.8 6.08L17.65 6.16C17.346 6.33554 17.0011 6.42795 16.65 6.42795C16.2989 6.42795 15.954 6.33554 15.65 6.16L15.22 5.91C14.9163 5.73464 14.664 5.48248 14.4885 5.17884C14.3129 4.87519 14.2204 4.53073 14.22 4.18V4C14.22 3.46957 14.0093 2.96086 13.6342 2.58579C13.2591 2.21071 12.7504 2 12.22 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="absolute top-[calc(100%+4rem)] left-6 text-black font-bold">Estanislao Manansala</div>
      <div className="absolute top-[calc(100%+5.3rem)] left-6">
        <div className="flex items-center text-black font-normal">
          <p>Username123</p>
          <svg className="w-4 h-4 ml-2" width="19" height="19" fill="none" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M9.50004 17.4167C9.31532 17.4167 9.15699 17.3639 9.02504 17.2583C8.8931 17.1528 8.79414 17.0142 8.72817 16.8427C8.47747 16.1038 8.16081 15.4111 7.77817 14.7646C7.40872 14.118 6.88754 13.3594 6.21462 12.4885C5.54171 11.6177 4.99414 10.7865 4.57192 9.99479C4.16289 9.20312 3.95837 8.24652 3.95837 7.12499C3.95837 5.58124 4.49275 4.27499 5.5615 3.20624C6.64344 2.1243 7.95629 1.58333 9.50004 1.58333C11.0438 1.58333 12.35 2.1243 13.4188 3.20624C14.5007 4.27499 15.0417 5.58124 15.0417 7.12499C15.0417 8.32569 14.8108 9.32847 14.349 10.1333C13.9004 10.925 13.3792 11.7101 12.7855 12.4885C12.073 13.4385 11.532 14.2302 11.1625 14.8635C10.8063 15.4837 10.5094 16.1434 10.2719 16.8427C10.2059 17.0274 10.1004 17.1726 9.95525 17.2781C9.82331 17.3705 9.67157 17.4167 9.50004 17.4167ZM9.50004 14.5865C9.72435 14.1378 9.97504 13.6958 10.2521 13.2604C10.5424 12.825 10.9646 12.2444 11.5188 11.5187C12.0862 10.7799 12.548 10.1003 12.9042 9.4802C13.2737 8.84687 13.4584 8.0618 13.4584 7.12499C13.4584 6.02985 13.0691 5.09965 12.2907 4.33437C11.5254 3.5559 10.5952 3.16666 9.50004 3.16666C8.4049 3.16666 7.4681 3.5559 6.68962 4.33437C5.92435 5.09965 5.54171 6.02985 5.54171 7.12499C5.54171 8.0618 5.71983 8.84687 6.07608 9.4802C6.44553 10.1003 6.91393 10.7799 7.48129 11.5187C8.03546 12.2444 8.45108 12.825 8.72817 13.2604C9.01844 13.6958 9.27574 14.1378 9.50004 14.5865ZM9.50004 9.10416C10.0542 9.10416 10.5226 8.91284 10.9052 8.5302C11.2879 8.14756 11.4792 7.67916 11.4792 7.12499C11.4792 6.57083 11.2879 6.10242 10.9052 5.71979C10.5226 5.33715 10.0542 5.14583 9.50004 5.14583C8.94587 5.14583 8.47747 5.33715 8.09483 5.71979C7.71219 6.10242 7.52087 6.57083 7.52087 7.12499C7.52087 7.67916 7.71219 8.14756 8.09483 8.5302C8.47747 8.91284 8.94587 9.10416 9.50004 9.10416Z" fill="#666666"/></svg>
          <span className="ml-2 text-sm">Location, XYZ</span>
        </div>
        <div className="font-semibold mt-5 mb-6">Lorem Ipsum ipsalorem</div>
        <div className="flex items-center mb-2 ml-0.5">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_108_622)">
          <path d="M4.5 16.5V3C4.5 2.7975 4.5 2.5875 4.5525 2.385C4.59841 2.18297 4.70005 1.99786 4.84588 1.8507C4.99171 1.70355 5.17589 1.60023 5.3775 1.5525C5.595 1.5 6.5475 1.5 6.75 1.5H12C12.2025 1.5 12.4125 1.5 12.615 1.5525C12.817 1.59841 13.0021 1.70005 13.1493 1.84588C13.2965 1.99171 13.3998 2.17589 13.4475 2.3775C13.5 2.5875 13.5 2.7975 13.5 3V16.5H4.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.49996 10.5V15C1.49996 15.825 2.17496 16.5 2.99996 16.5H4.49996V9H2.99996C2.79746 9 2.58746 9 2.38496 9.0525C2.18246 9.105 1.99496 9.2025 1.84496 9.3525C1.70246 9.495 1.60496 9.6825 1.55246 9.885C1.51012 10.0871 1.49249 10.2936 1.49996 10.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.615 6.8025C15.4129 6.76017 15.2064 6.74254 15 6.75H13.5V16.5H15C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V8.25C16.5 8.04 16.5 7.8375 16.4475 7.635C16.395 7.4325 16.2975 7.245 16.1475 7.095C16.005 6.9525 15.8175 6.855 15.615 6.8025Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.5 4.5H10.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.5 7.5H10.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.5 10.5H10.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.5 13.5H10.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_108_622">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <span className="ml-2 font-semibold">Student</span>
        </div>
        <div className="flex items-center mb-2 ml-0.5">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4583 14.25C13.4583 13.8301 13.2915 13.4273 12.9945 13.1304C12.6976 12.8335 12.2949 12.6667 11.875 12.6667H7.12496C6.70503 12.6667 6.30231 12.8335 6.00537 13.1304C5.70844 13.4273 5.54163 13.8301 5.54163 14.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.0417 3.16666H3.95833C3.08388 3.16666 2.375 3.87555 2.375 4.75V15.8333C2.375 16.7078 3.08388 17.4167 3.95833 17.4167H15.0417C15.9161 17.4167 16.625 16.7078 16.625 15.8333V4.75C16.625 3.87555 15.9161 3.16666 15.0417 3.16666Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.49996 9.5C10.3744 9.5 11.0833 8.79112 11.0833 7.91667C11.0833 7.04222 10.3744 6.33334 9.49996 6.33334C8.62551 6.33334 7.91663 7.04222 7.91663 7.91667C7.91663 8.79112 8.62551 9.5 9.49996 9.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.33337 1.58334V3.16667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6666 1.58334V3.16667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className="ml-2 font-semibold">Contact Info XYZ</span>
        </div>
        <div className="flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z" fill="#1D1B20"/>
          </svg>
          <span className="ml-2 font-semibold">15 <span className="font-normal">followers</span> · 19 <span className="font-normal">followers</span></span>
        </div>
        <div className="font-bold">
          <br/><br/><br/>
          CERTIFICATIONS
        </div>
        <br/>
        <div className='flex'>
          <br/>
          <img src={cert} className='mr-2'></img>
          <div className='mb-0 mt-0'>
            <p className='font-bold'>Certification XYZ from XYZ</p>
            <p className='font-semibold'>Company XYZ</p>
            <p className='font-normal'>Issued Jul 2024 · Expires Jun 2025</p>
          </div>
        </div>
        <div className='ml-20 mr-14' style={{ border: '1px solid #000', borderRadius: '10px' }}>
          <div className='flex items-center'>
            <p className='ml-3'>Show Credentials</p>
            <svg className='ml-2' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.5V12.5C2.5 12.8315 2.6317 13.1495 2.86612 13.3839C3.10054 13.6183 3.41848 13.75 3.75 13.75H11.25C11.5815 13.75 11.8995 13.6183 12.1339 13.3839C12.3683 13.1495 12.5 12.8315 12.5 12.5V7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 3.75L7.5 1.25L5 3.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 1.25V9.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <br/>
        <div className='ml-20 mr-0' style={{ borderRadius: '10px', padding: '0', margin: '0' }}>
          <hr style={{ borderWidth: '1px', borderColor: '#000', margin: '0' }}></hr>
        </div>
        <br/>
        <div className='flex'>
          <br/>
          <img src={cert} className='mr-2'></img>
          <div className='mb-0 mt-0'>
            <p className='font-bold'>Certification XYZ from XYZ</p>
            <p className='font-semibold'>Company XYZ</p>
            <p className='font-normal'>Issued Jul 2024 · Expires Jun 2025</p>
          </div>
        </div>
        <div className='ml-20 mr-14' style={{ border: '1px solid #000', borderRadius: '10px' }}>
          <div className='flex items-center'>
            <p className='ml-3'>Show Credentials</p>
            <svg className='ml-2' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.5V12.5C2.5 12.8315 2.6317 13.1495 2.86612 13.3839C3.10054 13.6183 3.41848 13.75 3.75 13.75H11.25C11.5815 13.75 11.8995 13.6183 12.1339 13.3839C12.3683 13.1495 12.5 12.8315 12.5 12.5V7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 3.75L7.5 1.25L5 3.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 1.25V9.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <br/>
        <div className='ml-20 mr-0' style={{ borderRadius: '10px', padding: '0', margin: '0' }}>
          <hr style={{ borderWidth: '1px', borderColor: '#000', margin: '0' }}></hr>
        </div>
        <br/>
        <div className='flex'>
          <br/>
          <img src={cert} className='mr-2'></img>
          <div className='mb-0 mt-0'>
            <p className='font-bold'>Certification XYZ from XYZ</p>
            <p className='font-semibold'>Company XYZ</p>
            <p className='font-normal'>Issued Jul 2024 · Expires Jun 2025</p>
          </div>
        </div>
        <div className='ml-20 mr-14' style={{ border: '1px solid #000', borderRadius: '10px' }}>
          <div className='flex items-center'>
            <p className='ml-3'>Show Credentials</p>
            <svg className='ml-2' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.5V12.5C2.5 12.8315 2.6317 13.1495 2.86612 13.3839C3.10054 13.6183 3.41848 13.75 3.75 13.75H11.25C11.5815 13.75 11.8995 13.6183 12.1339 13.3839C12.3683 13.1495 12.5 12.8315 12.5 12.5V7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 3.75L7.5 1.25L5 3.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 1.25V9.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <br/>
        <div className='ml-20 mr-0' style={{ borderRadius: '10px', padding: '0', margin: '0' }}>
          <hr style={{ borderWidth: '1px', borderColor: '#000', margin: '0' }}></hr>
        </div>
        <br/>
        <div className='flex'>
          <br/>
          <img src={cert} className='mr-2'></img>
          <div className='mb-0 mt-0'>
            <p className='font-bold'>Certification XYZ from XYZ</p>
            <p className='font-semibold'>Company XYZ</p>
            <p className='font-normal'>Issued Jul 2024 · Expires Jun 2025</p>
          </div>
        </div>
        <div className='ml-20 mr-14' style={{ border: '1px solid #000', borderRadius: '10px' }}>
          <div className='flex items-center'>
            <p className='ml-3'>Show Credentials</p>
            <svg className='ml-2' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.5V12.5C2.5 12.8315 2.6317 13.1495 2.86612 13.3839C3.10054 13.6183 3.41848 13.75 3.75 13.75H11.25C11.5815 13.75 11.8995 13.6183 12.1339 13.3839C12.3683 13.1495 12.5 12.8315 12.5 12.5V7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 3.75L7.5 1.25L5 3.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 1.25V9.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <br/>
        <div className='ml-20 mr-0' style={{ borderRadius: '10px', padding: '0', margin: '0' }}>
          <hr style={{ borderWidth: '1px', borderColor: '#000', margin: '0' }}></hr>
        </div>
      </div>
    </div>
  )
}

export default Profile