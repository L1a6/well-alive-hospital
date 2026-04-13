import { SiteShell } from "../../components/site-shell";

export default function ElementsPage() {
  return (
    <SiteShell
      title="Elements"
      subtitle="Reusable design components for Well Alive Hospital"
    >
      <section className="bg-white pb-[70px] pt-[100px]">
        <div className="page-container">
          <h2 className="mb-[30px] text-[24px] font-[500]">Sample Elements</h2>
          <p className="mt-4 max-w-3xl text-[16px] font-[300] text-[#234821]">
            This page demonstrates reusable layout, form, and action patterns used
            across Well Alive Hospital pages for a consistent patient experience.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-[#eeeeee] bg-white p-6">
              <h3 className="text-[18px] font-[600]">Card Element</h3>
              <p className="mt-2 text-[14px] text-[#234821]">Reusable spacing, radius, and shadow tokens.</p>
            </div>
            <div className="border border-[#eeeeee] bg-white p-6">
              <h3 className="text-[18px] font-[600]">Form Element</h3>
              <input
                type="text"
                placeholder="Type here"
                className="mt-3 h-10 w-full bg-[#f9f9ff] px-3 text-[13px]"
              />
            </div>
            <div className="border border-[#eeeeee] bg-white p-6">
              <h3 className="text-[18px] font-[600]">Action Element</h3>
              <button className="mt-3 border border-[#5AAC4E] bg-white px-6 py-3 text-[14px] uppercase tracking-[3px] text-[#5AAC4E] hover:bg-[#5AAC4E] hover:text-white">
                Primary Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
