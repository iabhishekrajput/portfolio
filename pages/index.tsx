import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Abhishek&apos;s Portfolio</title>
      </Head>
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Contact Me */}
    </div>
  );
}
