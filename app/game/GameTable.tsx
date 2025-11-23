import CommunityCards from "./CommunityCards";
import PlayerHand from "./PlayerHand";
import ActionButtons from "./ActionButtons";

export default function GameTable() {
  return (
    <div className="w-full max-w-5xl bg-green-700 rounded-3xl p-6 shadow-2xl border-4 border-green-950">
      <div className="flex justify-center mb-8">
        <CommunityCards />
      </div>

      <div className="flex justify-center mb-8">
        <PlayerHand />
      </div>

      <div className="flex justify-center">
        <ActionButtons />
      </div>
    </div>
  );
}
