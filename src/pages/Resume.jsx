import {useEffect, useRef,useState} from 'react'
import { motion,useInView,useAnimation} from "framer-motion"
import { Document, Page, pdfjs} from 'react-pdf';
import file from '../assets/Updated_Resume (6).pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {

  const imgRef = useRef(null);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }  
  const isimgView = useInView(imgRef); 
  const modify = useAnimation();

  useEffect(()=>{
    if(isimgView){
      modify.start('visible');
    }
    else{
      modify.start('hidden');
    }
  })
  return (
    <div className='pt-32 min-h-screen'>
      <motion.div className='max-w-5xl mx-auto border border-red-400 rounded-lg p-7'  style={{background:'rgba(241, 241, 245, 0.1)'}} ref={imgRef}
      
      animate = {modify}
      initial = 'hidden'
      variants={{
        hidden: {opacity: 0, transform: "translateY(-75%)", filter: "blur(25px)"} ,
        visible: {opacity: 1, transform: "translateY(0%)", filter: "blur(0px)"} ,
      }}
      transition={{ delay: 0.1 }}

      >
        <motion.h1 className='text-3xl text-red-400 text-center font-extrabold underline underline-offset-8 mb-7'>Resume</motion.h1>
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="w-full max-w-2xl overflow-hidden">
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} width={window.innerWidth > 768 ? 680 : window.innerWidth - 50} />
                </Document>
            </div>
            <a href={file} download='Samuel_s_Resume.pdf'><motion.button className='border bg-green-400 rounded-full p-3 border-blue-600'
                      whileTap={{scale: 0.95}}
                      whileHover={{scale: 1.3}}
            >Download Resume</motion.button></a>
        </div>
        
            
      </motion.div>
    </div> 
  )
}