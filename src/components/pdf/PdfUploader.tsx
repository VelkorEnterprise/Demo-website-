'use client';

import { useState } from 'react';

export default function PdfUploader() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [mergedPdf, setMergedPdf] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleMerge = async () => {
    if (!files || files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('pdfs', files[i]);
    }

    try {
      const response = await fetch('/api/merge-pdfs', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setMergedPdf(url);
      } else {
        alert('Failed to merge PDFs.');
      }
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('An error occurred while merging PDFs.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-neutral">
        Merge PDF Files
      </h2>
      <div className="flex flex-col items-center">
        <label
          htmlFor="file-upload"
          className="px-6 py-3 text-white bg-primary rounded-lg cursor-pointer hover:bg-primary-dark transition-colors"
        >
          Select PDFs
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />
        {files && (
          <div className="mt-4 text-sm text-neutral-light">
            {files.length} file(s) selected
          </div>
        )}
      </div>
      <button
        onClick={handleMerge}
        disabled={!files || files.length < 2 || isLoading}
        className="w-full px-4 py-3 text-lg font-bold text-white bg-secondary rounded-lg hover:bg-green-600 disabled:bg-gray-400 transition-colors"
      >
        {isLoading ? 'Merging...' : 'Merge PDFs'}
      </button>
      {mergedPdf && (
        <div className="mt-4 text-center">
          <a
            href={mergedPdf}
            download="merged.pdf"
            className="text-primary hover:underline"
          >
            Download Merged PDF
          </a>
        </div>
      )}
    </div>
  );
}
