import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Globe,
  Instagram,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full py-12 md:py-16 z-50"
      style={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
    >
      <div className="w-[90%] mx-auto">
        <div className="py-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Logo and Branding */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center px-4">
                <Button
                  asChild
                  className="dark:bg-transparent hover:bg-black cursor-pointer"
                >
                  <Link className="h-[100%]" href="/">
                    <img
                      className="h-13 w-45"
                      src="/images/new-logo-5.png"
                      alt=""
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-100  mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 dark:text-gray-100 text-sm leading-relaxed">
                    Buah Batu Street 886 - ID
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-700 dark:text-gray-100 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-100  text-sm">
                  +122 - 000 - 000
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-100  flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-100  text-sm">
                  email@email.com
                </p>
              </div>
            </div>
          </div>

          {/* About and Social Media */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-100  text-sm leading-relaxed">
                Based in Bandung ID, we offer web design, web development,
                branding identity. We create brands, campaigns and digital
                platforms that help our clients grow.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
