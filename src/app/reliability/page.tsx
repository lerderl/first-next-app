import Hero from "@/components/hero";

import relyImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={relyImg}
      imgAlt="Welding"
      title="Super high reliability hosting"
    />
  );
}
