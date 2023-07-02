import React from 'react';
import Link

from 'next/link';
const Heading = ({head}) => {
  return (
    <>
      <Link href="/"><p className=' text-opacity-80 text-[1rem] font-bold border-l-2 pl-1 capitalize text-zinc-950 dark:text-white'>{head}</p></Link>
    </>
  );
}

export default Heading;
