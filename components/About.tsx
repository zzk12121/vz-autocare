import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-ink-900 py-20 lg:py-24">
      <div className="container-lux grid gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5">About Vz Autocare</p>
          <h2 className="heading-lux text-4xl sm:text-5xl">Two friends. One local business.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 leading-relaxed text-cream/75">
            <p>We’re two friends starting a mobile car care business in Brighton &amp; Hove. Our focus is simple: taking care of everyday cars and making the service easy to arrange.</p>
            <p>You’ll deal directly with us. We’ll talk through what your car needs, agree the work and price, and arrange a suitable place to clean it.</p>
            <p>We’re building Vz Autocare one car at a time. Photos of our own work and feedback from our first customers will be added as we get going.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
