import { Container } from "@/components/shared/container";
import { Title } from '@/components/shared/title';

export default function Home() {
  return (
    <>
      <Container className="flex items-center justify-between py-8">
          <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
    </>
  );
}
