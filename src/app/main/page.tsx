import { SiteShell } from "../../components/site-shell";

export default function MainPage() {
  return (
    <SiteShell
      title="Main"
      subtitle="Well Alive Hospital digital experience overview"
    >
      <section className="py-[100px]">
        <div className="page-container bg-white p-10 text-center">
          <h2 className="section-title">Main Hospital Platform</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] text-[#234821]">
            This route showcases the modern Next.js, TypeScript, and Tailwind
            foundation powering Well Alive Hospital&apos;s patient-facing website.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="border border-[#eeeeee] bg-white p-5 text-[14px]">Type-safe route architecture</div>
            <div className="border border-[#eeeeee] bg-white p-5 text-[14px]">Modern utility-first styling system</div>
            <div className="border border-[#eeeeee] bg-white p-5 text-[14px]">Optimized performance and maintainability</div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
