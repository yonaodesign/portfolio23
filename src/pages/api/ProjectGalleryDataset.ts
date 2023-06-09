export interface IGalleryItem {
  projectName: string;
  projectDescription: string;
  projectGalleryImage: string;
  projectSlug: string;
  projectColor: string;
}

export const GalleryData: IGalleryItem[] = [
  {
    projectName: "zumen+",
    projectDescription:
      "An application for archiving and sharing technical documentation.",
    projectGalleryImage: "Image 1.png",
    projectSlug: "zumen",
    projectColor: "dodgerblue",
  },
  {
    projectName: "mini crm",
    projectDescription:
      "An application for managing customer interactions and aggregating data on a map.",
    projectGalleryImage: "crm.webp",
    projectSlug: "crm",
    projectColor: "#FEE401",
  },
  {
    projectName: "Japanible",
    projectDescription:
      "A small public web2 blogging platform for Japan enthusiasts.",
    projectGalleryImage: "japanibleGallery.png",
    projectSlug: "japanible",
    projectColor: "#FF0000",
  },
  {
    projectName: "PUR CHER",
    projectDescription: "A SPA product landing page.",
    projectGalleryImage: "cherGallery.png",
    projectSlug: "purcher",
    projectColor: "papayawhip",
  },
  {
    projectName: "Sensyo Co., Ltd.",
    projectDescription:
      "A vanilla redesign of a Metal Surface Finisher website.",
    projectGalleryImage: "sensyoGallery.png",
    projectSlug: "sensyo",
    projectColor: "#00D1FF",
  },
  {
    projectName: "backslack",
    projectDescription:
      "A UI for Slack backup through Slack Bot; built as an alternative to paid applications.",
    projectGalleryImage: "backslackGallery.webp",
    projectSlug: "backslack",
    projectColor: "#00FFC2",
  },
  {
    projectName: "SMOSS",
    projectDescription:
      "A no-code application that helps manage production in real-time-ish with a step-by-step system.",
    projectGalleryImage: "smoss.webp",
    projectSlug: "smoss",
    projectColor: "indianred",
  },
  // {
  //   projectName: "SSKS",
  //   projectDescription: "A no-code application that helps managing in-house orders in-realish time combined with Slack API.",
  //   projectGalleryImage: "PLACEHOLDER.png",
  //   projectSlug: 'ssks',
  //   projectColor: '#00FFC2'
  // },

  {
    projectName: "b2b.wiki (building)",
    projectDescription:
      "A platform for business matching based on data aggregated from government APIs and user generated content.",
    projectGalleryImage: "b2bGallery.webp",
    projectSlug: "b2b",
    projectColor: "#9EFF00",
  },
];
