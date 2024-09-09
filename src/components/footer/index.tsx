function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">Shortly</div>
            <p className="mb-4">
              Shortly is a URL shortening service that allows you to shorten
              long links and share them with ease.
            </p>
            <p>© 2024 Shortly. All Rights Reserved.</p>
          </div>
          {[
            {
              title: "Features",
              links: ["Link Shortening", "Branded Links", "Analytics"],
            },
            { title: "Resources", links: ["Blog", "Developers", "Support"] },
            {
              title: "Company",
              links: ["About", "Our Team", "Careers", "Contact"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-bold mb-2">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-1">
                    <a href="#" className="hover:text-teal-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Social Links Column */}
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a href="#" className="text-white hover:text-teal-500">
                <img src="src/assets/svg/icon-facebook.svg" alt="facebook" />
              </a>
              <a href="#" className="text-white hover:text-teal-500">
                <img src="src/assets/svg/icon-twitter.svg" alt="twitter" />
              </a>
              <a href="#" className="text-white hover:text-teal-500">
                <img src="src/assets/svg/icon-pinterest.svg" alt="pinterest" />
              </a>
              <a href="#" className="text-white hover:text-teal-500">
                <img src="src/assets/svg/icon-instagram.svg" alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
