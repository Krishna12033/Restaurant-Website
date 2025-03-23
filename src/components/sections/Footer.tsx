
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-4">
              Elicious
            </h3>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              A refined dining experience that celebrates the art of exceptional food, ambiance, and service.
            </p>
            <div className="mt-6 flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/90 transition-colors hover:bg-primary-foreground/20"
                  aria-label={`Visit our ${social} page`}
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social === 'facebook' && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    )}
                    {social === 'twitter' && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </>
                    )}
                    {social === 'instagram' && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </>
                    )}
                    {social === 'youtube' && (
                      <>
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15 5-3-5-3z"></path>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-primary-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Chef\'s Table', 'Private Events'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-primary-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-primary-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border-0 bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30"
                required
              />
              <button
                type="submit"
                className="rounded-r-md bg-primary-foreground px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Elicious Restaurant. All rights reserved.
            </p>
            <p className="text-center text-xs text-primary-foreground/60">
              Designed with <span className="text-primary-foreground/90">♥</span> for exceptional dining
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
