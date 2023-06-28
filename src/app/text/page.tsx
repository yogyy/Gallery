'use client';

import { UploadButton } from '@uploadthing/react';
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css';
import { OurFileRouter } from '../api/uploadthing/core';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';

export default function Home() {
  const [images, setImages] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24">
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={res => {
          // Do something with the response
          console.log('Files: ', res);
          toast({
            title: 'Upload Completed',
            description: res![0].fileKey + 'Success Uploaded',
          });
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
