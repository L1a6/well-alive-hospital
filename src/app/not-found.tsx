import Link from "next/link";
import { ArrowLeft, FileWarning } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-emerald-950 px-6 py-12">
      <div className="w-full max-w-lg rounded-2xl bg-white/5 p-8 text-center">
        <div className="mb-4 flex flex-col items-center gap-3 text-white">
          <FileWarning className="h-8 w-8" />
          <h1 className="text-3xl">404 — Page not found</h1>
        </div>
        <p className="mb-8 text-base text-white/60" style={{ letterSpacing: "-0.03em" }}>
          The page you requested is unavailable or may have been moved.
        </p>
        <Link href="/" className="cta-btn !bg-white !text-black">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
