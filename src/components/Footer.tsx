import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MoveAbroad</h3>
            <p className="text-white/80 mb-4">
              Your trusted partner for international education and study abroad
              opportunities.
            </p>
            <div className="flex gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61583240469747"
                target="_blank"
                className="hover:text-secondary transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/moveabroadideas"
                target="_blank"
                className="hover:text-secondary transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/move_abroad_service/"
                className="hover:text-secondary transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Study Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Visa Assistance
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Student Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  University Application
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Visa Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Scholarship Search
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Pre-Departure Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Accommodation Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">123 Education Plaza, Lagos, Nigeria</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+2348000000000"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  +234 800 000 0000
                </a>
              </li> */}
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                {/* <a
                  href="mailto:info@moveabroad.com"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  info@moveabroad.com
                </a> */}
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-white/80">
                Office Hours:
                <br />
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} MoveAbroad. All rights reserved. |
            <a href="#" className="hover:text-white transition-smooth ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-white transition-smooth ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
