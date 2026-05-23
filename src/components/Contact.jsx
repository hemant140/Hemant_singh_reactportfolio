import { useInView } from '../hooks/useInView';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';

const contactInfo = [
  { icon: <HiOutlineMail size={20} />,  label: 'Email',    value: 'hemo.hm579@gmail.com',           href: 'mailto:hemo.hm579@gmail.com' },
  { icon: <FaLinkedin size={18} />,     label: 'LinkedIn', value: 'linkedin.com/in/hemant140',       href: 'https://www.linkedin.com/in/hemant140/' },
  { icon: <FaGithub size={18} />,       label: 'GitHub',   value: 'github.com/hemant140',            href: 'https://github.com/hemant140' },
  { icon: <HiLocationMarker size={20} />, label: 'Location', value: 'India' },
];

const socials = [
  { href: 'https://www.linkedin.com/in/hemant140/', icon: <FaLinkedin size={18} /> },
  { href: 'https://github.com/hemant140',           icon: <FaGithub size={18} /> },
  { href: 'https://www.instagram.com/h_e_m_a_n_t14/', icon: <FaInstagram size={18} /> },
];

const Contact = () => {
  const [sectionRef, inView] = useInView();

  return (
    <div name="contact" className="relative w-full min-h-screen cosmic-bg-alt py-28 overflow-hidden">
      <div className="grid-overlay" />
      <div className="orb orb-neon absolute w-[350px] h-[350px] bottom-[-60px] right-[-60px] opacity-15" />
      <div className="orb orb-green absolute w-[260px] h-[260px] top-[10%] left-[-50px] opacity-10" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={sectionRef} className="mb-16">
          <p className={`section-label mb-3 reveal-hidden ${inView ? 'revealed' : ''}`}>Get In Touch</p>
          <h2 className={`section-title reveal-hidden stagger-1 ${inView ? 'revealed' : ''}`}>
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className={`w-20 h-1 rounded-full mt-4 reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
               style={{ background: 'linear-gradient(90deg, var(--primary), var(--green))' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — info */}
          <div className={`lg:w-80 flex-shrink-0 reveal-hidden-left ${inView ? 'revealed' : ''}`}>
            <h3 className="font-Outfit font-bold text-xl text-white mb-3">Let's work together</h3>
            <p className="font-Outfit text-sm leading-relaxed mb-8" style={{ color: 'var(--text-dim)' }}>
              I'm open to full-time roles, freelance projects, and technical collaborations.
              Let's build something great.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                       style={{ background: 'var(--primary-08)', border: '1px solid var(--border)', color: 'var(--primary)' }}>
                    {icon}
                  </div>
                  <div>
                    <p className="font-Outfit text-xs uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                         className="font-Outfit text-sm font-medium transition-colors duration-200"
                         style={{ color: 'var(--text)' }}
                         onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; }}
                         onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-Outfit text-sm font-medium" style={{ color: 'var(--text)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
                       style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-dim)' }}
                       onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 0 15px var(--primary-08)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                       onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}>
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className={`flex-1 w-full reveal-hidden-right ${inView ? 'revealed' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="glass-card-new rounded-2xl p-8 md:p-10">
              <form action="https://getform.io/f/c9305fd4-31b5-427e-82ca-d4aaf454a8af" method="POST" className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-Outfit font-semibold text-sm tracking-wide" style={{ color: 'var(--text)' }}>Your Name</label>
                    <input type="text" name="name" placeholder="John Doe" required className="form-input" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-Outfit font-semibold text-sm tracking-wide" style={{ color: 'var(--text)' }}>Email Address</label>
                    <input type="email" name="email" placeholder="john@example.com" required className="form-input" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-Outfit font-semibold text-sm tracking-wide" style={{ color: 'var(--text)' }}>Subject</label>
                  <input type="text" name="subject" placeholder="Project inquiry / Collaboration" className="form-input" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-Outfit font-semibold text-sm tracking-wide" style={{ color: 'var(--text)' }}>Message</label>
                  <textarea name="message" rows="6" placeholder="Tell me about your project..." required className="form-input resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full mt-2 text-base py-4 flex items-center justify-center gap-2">
                  <span>Send Message</span><span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 text-center">
        <div className="section-divider mb-8" />
        <p className="font-Outfit text-sm" style={{ color: 'var(--text-dim)' }}>
          Designed & Built by{' '}
          <span className="gradient-text font-semibold">Hemant Singh</span>
          {' '}© {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Contact;
