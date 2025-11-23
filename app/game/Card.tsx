type Props = {
  symbol: string;
};

export default function Card({ symbol }: Props) {
  return (
    <div className="w-24 h-36 bg-white rounded-xl shadow-xl flex items-center justify-center text-8xl border border-gray-300">
      {symbol}
    </div>
  );
}
