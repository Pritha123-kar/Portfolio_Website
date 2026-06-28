import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-4xl font-bold text-white">
          Let's Connect
        </h2>

        <p className="mt-4 text-slate-400">
          I'm always open to discussing new projects,
          internship opportunities, and collaborations.
        </p>
      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <Mail className="text-indigo-400" />
          <span className="text-slate-300">
            prithakar2004@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-indigo-400" />
          <span className="text-slate-300">
            +91 86702 60368
          </span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-indigo-400" />
          <span className="text-slate-300">
            West Bengal, India
          </span>
        </div>

      </div>

    </div>
  );
};

export default ContactInfo;