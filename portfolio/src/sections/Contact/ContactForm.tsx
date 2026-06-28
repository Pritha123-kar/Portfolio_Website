const ContactForm = () => {
  return (
    <form className="space-y-5">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
      />

      <textarea
        rows={5}
        placeholder="Your Message"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
      />

      <button
        className="rounded-xl bg-indigo-600 px-8 py-4 text-white transition hover:bg-indigo-700"
      >
        Send Message
      </button>

    </form>
  );
};

export default ContactForm;