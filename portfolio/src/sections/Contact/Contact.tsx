import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionTitle
          title="Contact Me"
          subtitle="Let's build something amazing together."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
};

export default Contact;