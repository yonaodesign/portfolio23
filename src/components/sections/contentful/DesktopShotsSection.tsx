import React from "react";
import DesktopShot from "@/components/images/DesktopShot";
import { IProject } from "@/pages/api/ProjectDetailsDataset";
export function DesktopShotsSection({
  currentProjectDescriptions,
}: {
  currentProjectDescriptions: IProject[];
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
            fileUrl={entry}
            key={`desktopShop${index}`}
          ></DesktopShot>
        ))}
    </section>
  );
}
