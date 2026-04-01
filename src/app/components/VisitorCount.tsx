"use client";

import { useEffect, useState } from "react";

const VisitorCount = () => {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://uditmalshe.goatcounter.com/counter/TOTAL.json")
      .then((res) => res.json())
      .then((data) => setCount(data.count_unique ?? data.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="flex items-center justify-center py-4 mb-4">
      <div className="flex items-center gap-3 px-5 py-2.5 bg-white-100 border border-gray-200 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-xs md:text-sm font-medium text-black-600 tracking-wide">
          {count !== null ? (
            <>
              Thanks for visiting! Visitor count{" "}
              <span className="font-semibold text-gray-900">
                {Number(count).toLocaleString()}
              </span>{" "}and counting...
            </>
          ) : (
            "Counting visitors…"
          )}
        </span>
      </div>
    </div>
  );
};

export default VisitorCount;
