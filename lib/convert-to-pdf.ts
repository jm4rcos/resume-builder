import html2PDF from "jspdf-html2canvas";

export const options: Partial<Parameters<typeof html2PDF>[1]> = {
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  output: "./my-resume.pdf",
  imageQuality: 0.98,
  imageType: "image/jpeg",
  html2canvas: {
    scale: 2,
    logging: true,
  },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
};

export const exportPDF = (node: HTMLElement) => {
  html2PDF(node, options).then(() => {
    console.log("PDF created successfully");
  });
};
