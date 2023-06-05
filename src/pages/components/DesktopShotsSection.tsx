import React from "react";
import DesktopShot from "./DesktopShot";
export function DesktopShotsSection({
  currentProjectDescriptions,
}: {
  currentProjectDescriptions: any;
}) {
  return (
    <section
      style={{
        padding: "100px",
      }}
    >
      {currentProjectDescriptions[0].projectDesktopPhoto
        ?.slice(1)
        .map((entry: string, index: number) => (
          <DesktopShot
            index={index}
            fileUrl={entry}
            key={`desktopShop${index}`}
          ></DesktopShot>
        ))}
    </section>
  );
}
