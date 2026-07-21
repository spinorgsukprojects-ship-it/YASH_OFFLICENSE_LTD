import Link from "next/link";
import { Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section bg-mist">
      <div className="container max-w-3xl text-center">
        <p className="eyebrow mx-auto">404</p>
        <h1 className="mt-6 font-heading text-4xl font-extrabold md:text-5xl">Page Not Found</h1>
        <p className="mt-4 text-lg leading-8 text-slateText">
          The page you are looking for may have moved. You can return home or contact Yashofflicense LTD for support.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link className="btn btn-primary" href="/"><Home size={18} /> Home</Link>
          <Link className="btn btn-secondary" href="/contact"><Mail size={18} /> Contact</Link>
        </div>
      </div>
    </section>
  );
}
