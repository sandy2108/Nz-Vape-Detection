import React from 'react'
import { Collapse } from 'react-collapse';
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai';


const AccordianItem = ({open,toggle,title,description}) => {
  return (
    <div className='py-[10px]'>
        <div className='bg-gray-200 py-[15px] px-[20px] flex justify-between items-center cursor-pointer' onClick={toggle}>
            <p className='text-[15px] font-medium '>{title}</p>
            <div className='text-[25px]'>
                {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className='bg-white px-[50px] pt-2 pb-[20px]'>{description}</div>
        </Collapse>


    </div>
  )
}

export default AccordianItem