import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-carbon py-10 text-chrome">
      <div className="section-shell flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <a href="#top" aria-label="Euvic home">
          <Image src="/euvic-logo.svg" alt="Euvic" width={178} height={32} className="h-auto w-[120px]" />
        </a>
        <p>© {new Date().getFullYear()} Euvic. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/company/euvic/" target="_blank" rel="noreferrer" className="hover:text-titanium">LinkedIn</a>
          <a href="https://www.euvic.com/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-titanium">Privacy</a>
          <a href="https://www.euvic.com/" target="_blank" rel="noreferrer" className="hover:text-titanium">Legal</a>
        </div>
      </div>
    </footer>
  );
}
