import React from 'react';

function PDFViewer() {
  return (
    <div className="w-full h-screen pt-16">
      <object
        data="/main.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
        <p>
          Your browser doesn't support PDF viewing. Please
          <a 
            href="/main.pdf"
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