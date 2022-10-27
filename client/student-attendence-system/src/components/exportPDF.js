import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportFile = async (name, element) => {
  const scale = window.devicePixelRatio > 1 ? window.devicePixelRatio : 2;
  let pdfFile = new jsPDF('p', 'pt', 'a4');
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  if (height > 14400) { 
    const ratio = 14400 / height;    
    width = width * ratio;
  }

  const canvas = document.createElement('canvas');
  canvas.width = width * scale;
  canvas.height = height * scale;
  var contentWidth = canvas.width;
  var contentHeight = canvas.height;

  var pageHeight = contentWidth / 592.28 * 841.89;
  
  var leftHeight = contentHeight;
  var position = 0;
  
  var imgWidth = 595.28;
  var imgHeight = 592.28 / contentWidth * contentHeight;
  const pdfCanvas = await html2canvas(ele, {
    useCORS: true,
    canvas,
    scale,
    width,
    height,
    x: 0,
    y: 0,
  });
  const imgDataUrl = pdfCanvas.toDataURL();
  height = height * pdfFile.internal.pageSize.getWidth() / width;
  width = pdfFile.internal.pageSize.getWidth();
  if (leftHeight < pageHeight) {
    pdfFile.addImage(imgDataUrl, 'png', 0, 0, imgWidth, imgHeight);
  } else { 
    while (leftHeight > 0) {
      pdfFile.addImage(imgDataUrl, 'png', 0, position, imgWidth, imgHeight)
      leftHeight -= pageHeight;
      position -= 841.89;      
      if (leftHeight > 0) {
        pdfFile.addPage();
      }
    }
  }
  await pdfFile.save(`${name}.pdf`);
}