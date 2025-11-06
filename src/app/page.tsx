import Navbar from '@/components/Navbar';
import Scene from '@/components/Scene';
import PdfUploader from '@/components/pdf/PdfUploader';
import Services from '@/components/pdf/Services';
import Content from '@/components/Content';

export default function Home() {
  return (
    <div className="bg-base-200">
      <Navbar />
      <main className="min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <Scene />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center">
            <div className="bg-neutral bg-opacity-70 p-6 rounded-2xl mb-12">
              <h1 className="text-5xl font-extrabold text-center text-white">
                Welcome to the 3D PDF Converter
              </h1>
            </div>
            <div className="mb-12">
              <PdfUploader />
            </div>
            <div className="mb-12">
              <Services />
            </div>
            <Content />
          </div>
        </div>
      </main>
    </div>
  );
}
