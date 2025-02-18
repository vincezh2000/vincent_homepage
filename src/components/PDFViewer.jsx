import React from 'react';
import { useParams } from 'react-router-dom';

function PDFViewer() {
  const { id } = useParams();
  
  // 根据路由参数选择 PDF 文件
  const getPDFPath = () => {
    switch (id) {
      case 'expo':
        return '/main.pdf';
      case 'fe_return':
        return '/fe_return.pdf';
      case 'rp-diffusion':
        return '/RP-diffusion DPO.pdf';
      default:
        return '/main.pdf';
    }
  };

  return (
    <div className="w-full h-screen pt-16">
      <object
        data={getPDFPath()}
        type="application/pdf"
        className="w-full h-full"
      >
        <p>
          Your browser doesn't support PDF viewing. Please
          <a 
            href={getPDFPath()}
            className="text-[#A259FF] hover:underline ml-1"
            download
          >
            download the PDF
          </a>
          to view it.
        </p>
      </object>
    </div>
  );
}

export default PDFViewer; 