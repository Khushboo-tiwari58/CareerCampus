// src/app/vocational/data.ts

export interface VideoResource {
  title: string;
  url: string; // YouTube or normal video link
}

export const vocationalVideos: VideoResource[] = [
  {
    title: "MS Excel Basics",
    url: "https://www.youtube.com/embed/wbJcJCkBcMg?si=FNQwS82S1SfjqkQD",
  },
  {
    title: "Communication Skills",
    url: "https://www.youtube.com/embed/v00DUIxRX0c?si=SUVebQRnkfflD3E5",
  },
  {
    title: "AI Tools in Study",
    url: "https://www.youtube.com/embed/_998DCW7HbM?si=8CLMiae0pjxPIjXJ",
  },
  {
    title: "Graphic Design Basics",
    url: "https://www.youtube.com/embed/Ue2VH7wXhCI?si=t7aHE71Dj4GED3Cl",
  },
  {
    title: "Video Editing Basics",
    url: "https://www.youtube.com/embed/gbZ6hCNlq7g?si=qAS-wUIv0KmdL1-t",
  },
  {
    title: "Content Writing Basics",
    url: "https://www.youtube.com/embed/EyqO9Z-LkrM?si=V-ms6PO9x_j9OS10",
  },
];
