interface DescSectionProps {
  overview: string;
}

export default function DescSection({ overview }: DescSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Description</h1>
      <h3 className="w-4/5">{overview}</h3>
    </section>
  );
}
