import PeoplePhoto from "../assets/PeoplePhoto.png";
import { Dot } from "lucide-react";

export const Photo = () => {
  const w = 9;
  const h = 6;
  const rows = [];

  for (let i = 0; i < h; i++) {
    const row = [];

    for (let j = 0; j < w; j++) {
      row.push(<Dot key={`${i}-${j}`} className="w-3 h-6 text-orange-500" />);
    }

    rows.push(
      <div key={i} className="flex gap-3 justify-center">
        {row}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Top row of dots */}
      <div className="ml-40 mb-20">{rows}</div>

      {/* Photo */}
      <img src={PeoplePhoto} alt="People" className="w-100 rounded-xl absolute" />

      {/* Down row of dots */}
      <div className="mr-60">{rows}</div>
    </div>
  );
};
