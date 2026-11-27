import type { Visual } from "@/content/servicos";
import MapViz from "./MapViz";
import FeedViz from "./FeedViz";
import SearchViz from "./SearchViz";
import AgendaViz from "./AgendaViz";
import FunnelViz from "./FunnelViz";
import ChatViz from "./ChatViz";
import ReelViz from "./ReelViz";

const MAP = { map: MapViz, feed: FeedViz, search: SearchViz, agenda: AgendaViz, funnel: FunnelViz, chat: ChatViz, reel: ReelViz };

export default function ServiceVisual({ type }: { type: Visual }) {
  const C = MAP[type];
  return <C />;
}
