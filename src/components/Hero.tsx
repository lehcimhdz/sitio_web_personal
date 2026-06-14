import { personalInfo } from '@/data/content';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-24 section-padding">
      <div className="container-custom">
        <div className="max-w-2xl">
          <p className="text-sm font-mono text-neutral-500 mb-6">
            {personalInfo.name} · {personalInfo.location}
          </p>

          <h1 className="text-3xl md:text-4xl font-medium text-neutral-100 mb-8 leading-snug tracking-tight">
            Backend engineer. I write Python systems for organizations where
            the cost of getting it wrong is measured in someone{"’"}s
            afternoon, not in revenue.
          </h1>

          <p className="text-base text-neutral-400 leading-relaxed mb-10">
            Currently at XalDigital working on healthcare-sector backends.
            Before that — and still, on the side — keeping a victim registry
            online for a public agency in Mexico City. Mostly Django, Postgres,
            Celery, and whatever the data team needs next.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-neutral-500">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-neutral-300 hover:text-amber-300 transition-colors"
            >
              {personalInfo.email}
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
