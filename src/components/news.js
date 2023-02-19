import { useEffect, useState } from "react";

const News = () => {

  const [show, setShow] = useState();

  useEffect(() => {
    if (!localStorage.getItem('announcementIsOpen')) localStorage.setItem('announcementIsOpen', 'true');
    const announcementIsOpen = localStorage.getItem('announcementIsOpen') === 'true';
    if (announcementIsOpen) setShow(true);
  }, []);

  if (show) return (
    <div className="relative">
      <div 
        className="absolute right-1 top-1 cursor-pointer text-2xl text-white bg-black/80 rounded-full w-8 h-8 flex justify-center items-center pb-0.5 pl-0.5"
        onClick={() => {
          localStorage.setItem('announcementIsOpen', 'false');
          setShow(false);
        }}
      >×</div>
      <div className="py-4 w-full bg-gradient-to-r to-purple-700/80 from-green-300/80 text-white text-bold text-2xl text-center">Arweave Name Service is out of private beta! Mint your name at <a href="https://ans.gg" className="text-green-300 hover:underline hover:text-green-400/60">ans.gg</a></div>
    </div>
  ); else return <></>;
};

export default News;