'use client'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const CustomLink = ({href , title,className=""}) =>{
  const pathname = usePathname();
  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1.5px] inline-block bg-white absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${pathname == href? 'w-full':'w-0'}`}>
      &nbsp;  
      </span>
    </Link>
  )
}

const Header =() => {
  return (
    <header className='w-full h-24 sticky p-10 top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
    <motion.div 
    initial={{ 
      x:-500,
      opacity: 0,
      scale:0.5 
    }}
    animate={{ 
      x:0,
      opacity: 1,
      scale: 1 
    }}
    transition={{ duration:1}}
    className='flex flex-row items-center'>
        <motion.div whileHover={{y:-3}}>
        <SocialIcon url='https://www.facebook.com/ketsolpvtltd/' 
        fgColor='#3b5998'
        bgColor='transparent'/>
        </motion.div>

        <motion.div whileHover={{y:-3}}>
        <SocialIcon url='https://twitter.com/Ketsolpvtltd' 
        fgColor='#55acee'  
        bgColor='transparent'/>
        </motion.div>
        
        <motion.div whileHover={{y:-3}}>
        <SocialIcon url='https://www.youtube.com/channel/UCnq_NNAqseuc7cg3AZOo_Gw' 
        fgColor='#cd201f'
        bgColor='transparent'/>
        </motion.div>

        <motion.div whileHover={{y:-3}}>
        <SocialIcon url='https://www.google.com/maps/place/Ketsol+Private+Limited/@19.4047409,72.8627483,15z/data=!4m6!3m5!1s0x3be7afbf3f459be7:0xe6ac35d23208265!8m2!3d18.5206757!4d73.9328959!16s%2Fg%2F11hm7lzs1l' 
        fgColor='#dc4e41'
        bgColor='transparent'/>
        </motion.div>

        <motion.div whileHover={{y:-3}}>
        <SocialIcon url='https://www.linkedin.com/company/ketsol/' 
        fgColor='#0077b5'
        bgColor='transparent'
        />
        </motion.div>
    </motion.div>
    
    <motion.div 
    initial={{ 
      x:500,
      opacity: 0,
      scale:0.5 
    }}
    animate={{ 
      x:0,
      opacity: 1,
      scale: 1 
    }}
    transition={{ duration:1}}
    
    className='flex flex-row items-center cursor-pointer'>
      <nav>
        <CustomLink href='/' title="Home" className='mr-4'/>
        <CustomLink href='https://github.com/harshgoel05/another-portfolio' title="About Us" className='mx-4'/>
        <CustomLink href='/' title="Products"className='mx-4'/>
        <CustomLink href='/' title="Projects"className='mx-4'/>
        <CustomLink href='/' title="Services" className='mx-4'/>
        <CustomLink href='/' title="Contacts" className='ml-4'/>
      </nav>


    </motion.div>
    </header>
  )
}

export default Header