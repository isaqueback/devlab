import { Tool } from './tool'

export function ToolsSection() {
  const cards = [
    {
      imgSrc: '/images/color-converter-img.webp',
      href: '/converter/hex-to-grb',
      title: 'Conversor de Cores',
      description:
        'Converta sua cor de um tipo para outro. Por exemplo: de hexadecimal para RGB.',
      isNew: true,
    },
  ]

  return (
    <section
      id="tools-section"
      className="relative flex min-h-screen w-screen flex-col items-center gap-20 bg-emerald-50 pb-10 dark:bg-purple-950"
    >
      <svg
        className="absolute fill-background"
        viewBox="0 0 1280 245"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 96 C 296.5 96 296.5 145 593 145 L 593 145 L 593 0 L 0 0 Z"
          strokeWidth="0"
        ></path>{' '}
        <path
          d="M 592 145 C 936 145 936 0 1280 0 L 1280 0 L 1280 0 L 592 0 Z"
          strokeWidth="0"
        ></path>{' '}
      </svg>
      <h2 className="z-10 mt-14 text-4xl font-semibold">Nossas Ferramentas</h2>
      <div className="container z-10 flex flex-wrap justify-center gap-10 max-xs:px-2">
        {cards.map((card, idx) => (
          <Tool
            description={card.description}
            href={card.href}
            idx={idx}
            imgSrc={card.imgSrc}
            isNew={card.isNew}
            title={card.title}
            key={idx}
          />
        ))}
      </div>
    </section>
  )
}
