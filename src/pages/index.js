import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import Container from "@/components/container/Container";
import Promo from "@/components/home-page/promo/Promo";
import GridItems from "@/components/home-page/grid-items/grid-item";
import Info from "@/components/home-page/info/info";

export default function Home() {
  return (
    <main>
      <Promo />
      <div className="margin">
        <Container>
          <CategoryLinks />
        </Container>
        <GridItems />
        <Info />
      </div>
    </main>
  );
}
