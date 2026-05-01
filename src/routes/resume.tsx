import { PDFViewer } from '@react-pdf/renderer';
import { createFileRoute } from '@tanstack/react-router';
import { ResumePDF } from '~/PDF/ResumePDF';

export const Route = createFileRoute('/resume')({
  ssr: false,
  component() {
    return (
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <ResumePDF />
      </PDFViewer>
    );
  },
});
