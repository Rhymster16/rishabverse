import Container from "../layout/Container";
import MissionHeader from "./MissionHeader";
import MissionMenu from "./MissionMenu";
import MissionStatus from "./MissionStatus";

export default function MissionControl() {
  return (
    <section className="min-h-screen bg-black py-24 text-white">
      <Container>
        <MissionHeader />
        <MissionMenu />
        <MissionStatus />
      </Container>
    </section>
  );
}