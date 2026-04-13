import { SiteShell } from "../../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell
      title="Contact"
      subtitle="Reach Well Alive Hospital for appointments and support"
    >
      <section className="pb-[100px] pt-[130px]">
        <div className="page-container grid gap-8 lg:grid-cols-[2fr_1fr]">
          <form className="bg-white p-2">
            <h2 className="mb-5 text-[27px] font-[600] text-[#0D210B]">Get in Touch</h2>
            <textarea
              name="message"
              rows={8}
              placeholder="Enter Message"
              className="w-full border border-[#e5e6e9] px-[18px] py-3 text-[13px]"
            />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="h-[48px] w-full border border-[#e5e6e9] px-[18px] text-[13px]"
              />
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="h-[48px] w-full border border-[#e5e6e9] px-[18px] text-[13px]"
              />
            </div>
            <button type="submit" className="mt-6 border border-[#5AAC4E] bg-white px-11 py-[18px] text-[14px] uppercase tracking-[3px] text-[#5AAC4E] hover:bg-[#5AAC4E] hover:text-white">
              Send Message
            </button>
          </form>

          <aside className="bg-[#fbf9ff] p-8">
            <h3 className="text-[20px] font-[500]">Contact Details</h3>
            <p className="mt-4 text-[14px] text-[#8a8a8a]">Phone: +234 9131193359</p>
            <p className="mt-2 text-[14px] text-[#8a8a8a]">Email: care@wellalivehospital.com</p>
            <p className="mt-2 text-[14px] text-[#8a8a8a]">Address: 24 Wellness Avenue, Medical District</p>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
