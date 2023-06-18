import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import Container from "@/components/container/Container";

export default function Home() {
  return (
    <>
      <Container>
        <div style={{ marginTop: "100px" }}>
          <CategoryLinks />
        </div>
      </Container>
    </>
  );
}
