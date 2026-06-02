import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FDF3DC] border-t border-[#EBDDBA]">
      <div
        className="max-w-[1500px] mx-auto
        px-4 sm:px-6 lg:px-8
        py-12"
      >
        <div
          className="grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2E1F12]">
              Farm<span className="text-[#E88A17]">ora</span>
            </h2>

            <p className="text-sm text-[#6D5B45] leading-6">
              Fresh organic fruits and farm products delivered straight to your
              doorstep with freshness you can trust.
            </p>

            <div className="flex gap-3 pt-2">
              <div
                className="w-9 h-9 rounded-full
                bg-[#F7E6B7]
                flex items-center justify-center
                text-[#2E1F12]
                hover:bg-[#E88A17]
                hover:text-white
                transition"
              >
                <FaInstagram />
              </div>

              <div
                className="w-9 h-9 rounded-full
                bg-[#F7E6B7]
                flex items-center justify-center
                text-[#2E1F12]
                hover:bg-[#E88A17]
                hover:text-white
                transition"
              >
                <FaFacebookF />
              </div>

              <div
                className="w-9 h-9 rounded-full
                bg-[#F7E6B7]
                flex items-center justify-center
                text-[#2E1F12]
                hover:bg-[#E88A17]
                hover:text-white
                transition"
              >
                <FaTwitter />
              </div>

              <div
                className="w-9 h-9 rounded-full
                bg-[#F7E6B7]
                flex items-center justify-center
                text-[#2E1F12]
                hover:bg-[#E88A17]
                hover:text-white
                transition"
              >
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#2E1F12] mb-4">Quick Links</h3>

            <ul className="space-y-3 text-[#6D5B45] text-sm">
              <li className="hover:text-[#E88A17] cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-[#E88A17] cursor-pointer transition">
                Shop
              </li>
              <li className="hover:text-[#E88A17] cursor-pointer transition">
                Categories
              </li>
              <li className="hover:text-[#E88A17] cursor-pointer transition">
                About Us
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[#2E1F12] mb-4">Categories</h3>

            <ul className="space-y-3 text-[#6D5B45] text-sm">
              <li>Fresh Fruits</li>
              <li>Dry Fruits</li>
              <li>Juices</li>
              <li>Organic Products</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#2E1F12] mb-4">Contact</h3>

            <div className="space-y-3 text-sm text-[#6D5B45]">
              <p>📍 Chandigarh, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉ support@farmora.com</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 pt-5
          border-t border-[#EBDDBA]
          flex flex-col sm:flex-row
          justify-between items-center
          gap-3"
        >
          <p className="text-sm text-[#7A6B57]">
            © 2025 Farmora. All rights reserved.
          </p>

          <p className="text-sm text-[#7A6B57]">Fresh • Organic • Trusted</p>
        </div>
      </div>
    </footer>
  );
}
