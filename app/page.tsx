import { Container } from "@/components/shared/container";
import { Title } from '@/components/shared/title';
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="flex items-center justify-between pt-8 pb-5">
          <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      
      <TopBar/>
    </>
  );
}
