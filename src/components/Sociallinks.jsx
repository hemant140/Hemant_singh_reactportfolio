import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socialLinks = [
  { id: 1, icon: <FaLinkedin size={17} />,   label: 'LinkedIn',  href: 'https://www.linkedin.com/in/hemant140/' },
  { id: 2, icon: <FaGithub size={17} />,     label: 'GitHub',    href: 'https://github.com/hemant140' },
  { id: 3, icon: <FaInstagram size={17} />,  label: 'Instagram', href: 'https://www.instagram.com/h_e_m_a_n_t14/' },
  { id: 4, icon: <HiOutlineMail size={19} />, label: 'Email',    href: 'mailto:hemo.hm579@gmail.com' },
];

const Sociallinks = () => (
  <div className="hidden lg:flex flex-col gap-1 fixed left-5 top-1/2 -translate-y-1/2 z-40">
    {/* Line above */}
    <div className="w-px h-16 mx-auto mb-2"
         style={{ background: 'linear-gradient(to bottom, transparent, var(--primary-30))' }} />

    {socialLinks.map(({ id, icon, label, href }) => (
      <a key={id} href={href} target="_blank" rel="noreferrer" title={label}>
        <div
          className="relative group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-dim)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 8px var(--shadow)' }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.color = 'var(--primary)';
            e.currentTarget.style.boxShadow = '0 0 15px var(--primary-15)';
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-dim)';
            e.currentTarget.style.boxShadow = '0 2px 8px var(--shadow)';
            e.currentTarget.style.transform = '';
          }}
        >
          {icon}
          {/* Tooltip */}
          <span
            className="absolute left-12 font-Outfit text-xs font-semibold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)', backdropFilter: 'blur(10px)' }}
          >
            {label}
          </span>
        </div>
      </a>
    ))}

    {/* Line below */}
    <div className="w-px h-16 mx-auto mt-2"
         style={{ background: 'linear-gradient(to bottom, var(--primary-30), transparent)' }} />
  </div>
);

export default Sociallinks;
