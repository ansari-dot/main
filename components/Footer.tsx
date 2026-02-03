
import React from 'react';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone, Globe, Code2, ShieldCheck, Users, Rocket, ExternalLink, ArrowRight, Facebook, Instagram } from 'lucide-react';
import logo from '/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 border-t border-slate-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex justify-start">
              <img 
                src={logo} 
                alt="3Novator Tech" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-base text-slate-400 leading-relaxed max-w-sm">
              Engineering high-performance software for industry leaders. Absolute technical integrity in every line of code.
            </p>
            
            {/* Follow Us Section */}
            <div className="space-y-3">
              <h5 className="text-white font-black uppercase tracking-wider text-sm">Follow Us</h5>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/share/1AQfcM7iAj/?mibextid=wwXIfr' },
                  { icon: Twitter, label: 'TwitterX', url: 'https://x.com/threenovator?s=21' },
                  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/3novatortech?igsh=MXZvaTZsNng2cWgxaw%3D%3D&utm_source=qr' },
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/3novator-tech/?viewAsMember=true' }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blueMedium hover:border-brand-blueMedium transition-all duration-300 shadow-lg group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Rocket size={20} className="text-brand-blueMedium" />
              <h4 className="text-white font-black uppercase tracking-wider text-sm">Services</h4>
            </div>
            <ul className="space-y-3">
              {[
                { name: 'Web Solutions', icon: ExternalLink },
                { name: 'AI Engineering', icon: ShieldCheck },
                { name: 'SaaS Platform', icon: Globe },
                { name: 'Cloud Strategy', icon: Code2 }
              ].map((service, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-slate-400 hover:text-brand-blueMedium transition-all duration-300 group"
                  >
                    <service.icon size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users size={20} className="text-brand-greenMedium" />
              <h4 className="text-white font-black uppercase tracking-wider text-sm">Company</h4>
            </div>
            <ul className="space-y-3">
              {[
                'About Us',
                'Case Studies', 
                'Blog'
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-slate-400 hover:text-brand-greenMedium transition-all duration-300 group"
                  >
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Mail size={20} className="text-brand-blueLight" />
              <h4 className="text-white font-black uppercase tracking-wider text-sm">Contact</h4>
            </div>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                  <MapPin size={20} className="text-brand-blueMedium shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Office</p>
                    <p className="text-slate-400 text-sm">Comsat University Road, Abbottabad</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                  <Mail size={20} className="text-brand-greenMedium shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-400 text-sm">threenovatortech@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                  <Phone size={20} className="text-brand-blueLight shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-400 text-sm">03489164985</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="3Novator Tech" 
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <p className="text-slate-400 text-sm">© 2025 3Novator Tech. Engineering Excellence.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-sm">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-sm">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
