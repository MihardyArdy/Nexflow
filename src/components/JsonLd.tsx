/** Renders a JSON-LD structured-data script (server-rendered, zero client JS). */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is static & trusted (built from our own content).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
