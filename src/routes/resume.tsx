import { PDFViewer } from '@react-pdf/renderer';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ResumePDF } from '~/PDF/ResumePDF';

export const Route = createFileRoute('/resume')({
  component() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (isClient) {
      return (
        <PDFViewer style={{ height: '100vh', width: '100vw' }}>
          <ResumePDF />
        </PDFViewer>
      );
    }

    return null;
  },
});
