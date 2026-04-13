import Link from "next/link";
import { ArrowLeft, FileWarning } from "lucide-react";

import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-lg border border-[#eeeeee] bg-white p-8">
        <div className="mb-4 flex items-center gap-3 text-[#0D210B]">
          <FileWarning className="h-6 w-6" />
          <h1 className="text-2xl font-semibold">Page not found</h1>
        </div>
        <p className="mb-6 text-[16px] text-[#234821]">
          The page you requested is unavailable or may have been moved.
        </p>
        <Button asChild>
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </main>
  );
}
