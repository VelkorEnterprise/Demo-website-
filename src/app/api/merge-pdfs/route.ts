import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const pdfs = formData.getAll('pdfs') as File[];

    if (pdfs.length < 2) {
      return new NextResponse('Please upload at least two PDFs to merge.', {
        status: 400,
      });
    }

    const mergedPdf = await PDFDocument.create();

    for (const pdf of pdfs) {
      const pdfBytes = await pdf.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(
        pdfDoc,
        pdfDoc.getPageIndices()
      );
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    const mergedPdfBytes = await mergedPdf.save();
    const buffer = Buffer.from(mergedPdfBytes);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="merged.pdf"',
      },
    });
  } catch (error) {
    console.error('Error merging PDFs:', error);
    return new NextResponse('An error occurred while merging PDFs.', {
      status: 500,
    });
  }
}
