interface ColorExplanationSectionProps {
  title: string
  paragraph: string
}

export function ColorExplanationSection({
  title,
  paragraph,
}: ColorExplanationSectionProps) {
  return (
    <section className="rounded-md border shadow-sm max-md:text-center lg:mx-8">
      <div className="flex max-w-5xl flex-col gap-2 p-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="font-light">{paragraph}</p>
      </div>
    </section>
  )
}
