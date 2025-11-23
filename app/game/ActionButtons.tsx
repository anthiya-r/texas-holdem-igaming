export default function ActionButtons() {
  return (
    <div className="flex gap-4">
      <button className="px-6 py-3 bg-gray-300 rounded-lg">Check</button>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">Call</button>
      <button className="px-6 py-3 bg-red-500 text-white rounded-lg">Fold</button>
      <button className="px-6 py-3 bg-yellow-500 rounded-lg">Bet</button>
    </div>
  );
}
