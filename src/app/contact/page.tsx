import { SiteShell } from "../../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell
      title="Get In Touch"
      titleDim={[1]}
      subtitle="Reach Well Alive Hospital for appointments and support"
    >
      <section className="bg-[#FEFDF9] py-20 lg:py-28">
        <div className="page-container grid gap-8 lg:grid-cols-[2fr_1fr]">
          <form className="rounded-2xl bg-white p-6 sm:p-10">
            <h2 className="mb-6 text-2xl">Send us a message</h2>
            <textarea
              name="message"
              rows={8}
              placeholder="Enter Message"
              className="w-full rounded-lg border border-black/10 bg-[#FEFDF9] px-[18px] py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
            />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="h-[48px] w-full rounded-lg border border-black/10 bg-[#FEFDF9] px-[18px] text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="h-[48px] w-full rounded-lg border border-black/10 bg-[#FEFDF9] px-[18px] text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
            <button type="submit" className="cta-btn !h-14 mt-6">
              Send Message
            </button>
          </form>

          <aside className="rounded-2xl bg-[#ECEDEC] p-8">
            <h3 className="text-xl">Contact Details</h3>
            <div className="mt-6 space-y-4 text-sm text-black/60" style={{ letterSpacing: "-0.03em" }}>
              <p>Phone: +234 913 119 3359</p>
              <p>Email: care@wellalivehospital.com</p>
              <p>Address: Shelter Afrique, Plot 2 Prof. Nse Essien Street, Uyo</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
