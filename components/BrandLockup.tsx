import Image from "next/image";
import Link from "next/link";

/** One shared, aligned logo treatment for every page and the footer. */
export default function BrandLockup({ footer = false, onClick }: { footer?: boolean; onClick?: () => void }) {
  return (
    <Link
      href="/"
      className={`brand-logo brand-lockup${footer ? " brand-footer" : ""}`}
      aria-label="Essential Solutions, home"
      onClick={onClick}
    >
      <Image className="brand-mark" src="/images/essential-mark.png" width={360} height={351} alt="" priority={!footer} />
      <span className="brand-words" aria-hidden="true">
        <span><b className="brand-blue">E</b>ssential</span>
        <span><b className="brand-red">S</b>olutions</span>
      </span>
    </Link>
  );
}
