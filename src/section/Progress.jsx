import React from "react";

function SkillBar({ skill, percent, color,icon }) {
  return (
    <div className="mb-6">
      {/* Skill name */}
      <div className="flex gap-1 items-center ">
        <div className="text-(--secondary_color)">{icon}</div>
        <div className="text-white font-semibold mb-1">{skill}</div>
      </div>
      {/* Percentage on top of the bar */}
      <div className="relative w-full bg-gray-700 rounded-full h-2 ">
        <div
          className={`absolute top-[-22px] text-sm text-white`}
          style={{ left: `${percent - 8}%` }}
        >
          {percent}%
        </div>

        {/* Progress line */}
        <div
          className={`h-2  rounded-full transition-all duration-700 ease-out ${color}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
// Example usage:
export default SkillBar;
