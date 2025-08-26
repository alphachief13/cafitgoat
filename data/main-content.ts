
interface AccordionData {
  title: string;
  description: string;
}

export const accordionContentData: AccordionData[] = [
  {
    title: "About Me",
    description: `
      My name is <strong>João Lucas da Rosa</strong>, I’m 18 years old and live in the southern region of Brazil.<br />
      Native language: Portuguese <br />
      <strong>Professional English</strong> <br />
      Main focus: <strong>Video Editing</strong><br />
      Hobby: <strong>Gaming</strong><br />
      Always seeking improvement and excellence.
    `,
  },
  {
    title: "Software",
    description: `
      I use <strong>DaVinci Resolve</strong> as my main editing tool: <br />
      – Video editing <br />
      – Color correction <br />
      – Visual effects <br />
      – Audio post-production
    `,
  },
  {
    title: "Availability",
    description: `
      <strong>Tue, Thu, Sat, Sun</strong> → 2pm – 12am (BRT, UTC-3) <br />
      <strong>Mon, Wed, Fri</strong> → 6pm – 12am (BRT, UTC-3)
    `,
  },
  {
    title: "Contact",
    description: `
      <strong>Discord:</strong> cafitgoat<br />
      <a href="https://www.reddit.com/user/MeiaaDoiss/" target="_blank"><strong>Reddit:</strong> u/MeiaaDoiss</a> <br />
      <a href="https://x.com/cafitgoat" target="_blank"><strong>Twitter (X):</strong> @cafitgoat</a> <br />
      <a href="https://www.youtube.com/@notifgoat" target="_blank"><strong>Youtube:</strong> @notifgoat</a> <br />
    `,
  },
];


type Video = {
  videoThumb: string;
  videoLink: string;
  videoName: string;
};

type VideosData = {
  gameplayWithCommentary: Video[];
  gameplayWithoutCommentary: Video[];
  memes: Video[];
  clipCompilation: Video[];
  acting: Video[];
  shorts: Video[];
};

export const videosData: VideosData = {
  gameplayWithCommentary: [
    {
      videoThumb: "https://i.imgur.com/I6Pu2YB.png",
      videoLink: "https://www.youtube.com/watch?v=WnTL0_Rh5hw",
      videoName: "PROGRESSION BREAKING (and how to do it)",
    },
    {
      videoThumb: "https://i.imgur.com/AxsZWOq.png",
      videoLink: "https://www.youtube.com/watch?v=HAszI_hzEhk&t=10s",
      videoName: "Grounded 2 is AMAZINGLY GOOD",
    },
    {
      videoThumb: "https://i.imgur.com/VeYw3FU.jpeg",
      videoLink: "https://www.youtube.com/watch?v=qJSrt21vDhU",
      videoName: "TERMITES NEED AN UPDATE (and here's why)",
    },
    // {
    //   videoThumb: "https://img.youtube.com/vi/Q5cUdiQ282k/maxresdefault.jpg",
    //   videoLink: "https://www.youtube.com/watch?v=Q5cUdiQ282k",
    //   videoName: "Just a Lime (ROBLOX)",
    // },
    // {
    //   videoThumb: "https://img.youtube.com/vi/ZAsmNmS8X10/maxresdefault.jpg",
    //   videoLink: "https://www.youtube.com/watch?v=ZAsmNmS8X10",
    //   videoName: "level 13 be like - Apeirophobia (Roblox)",
    // },
    // {
    //   videoThumb: "https://img.youtube.com/vi/At-pAmlVaGs/maxresdefault.jpg",
    //   videoLink: "https://www.youtube.com/watch?v=At-pAmlVaGs",
    //   videoName: "Can I make the Prince Buni's pole / essence good? (no)",
    // },
  ],
  gameplayWithoutCommentary: [
    {
      videoThumb: "https://img.youtube.com/vi/-ID071fkCng/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=-ID071fkCng",
      videoName: "two doofus trimping (and failing) for 15 minutes straight",
    },
    {
      videoThumb: "https://img.youtube.com/vi/umQQknFTmkM/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=umQQknFTmkM",
      videoName: "GRACE TRIMPING",
    },
    {
      videoThumb: "https://img.youtube.com/vi/lrywilr_b2I/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=lrywilr_b2I",
      videoName: "GOING METALLUM (Mortem Metallum)",
    },
  ],
  memes: [
    {
      videoThumb: "https://img.youtube.com/vi/ma8SLt4e1CY/hqdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=ma8SLt4e1CY",
      videoName: "how Altars of Apostasy got me feeling",
    },
    {
      videoThumb: "https://img.youtube.com/vi/_cSd_tlxOxg/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=_cSd_tlxOxg",
      videoName:
        "when the actual threat are your friends and not the ghost",
    },
    {
      videoThumb: "https://img.youtube.com/vi/pdm9VsAFcHs/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=pdm9VsAFcHs",
      videoName:
        "a man who loves walking will walk further than the man who loves the destination",
    },
  ],
  clipCompilation: [
    {
      videoThumb: "https://img.youtube.com/vi/eJTyuMjWGrs/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=eJTyuMjWGrs",
      videoName: "All Lethal Company clips I've ever made",
    },
    {
      videoThumb: "https://img.youtube.com/vi/MLrX-N40uyA/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=MLrX-N40uyA",
      videoName: "IS SLENDYTUBBIES III STILL FIRE???? (Slendytubbies 3)",
    },
  ],
  acting: [
    {
      videoThumb: "https://img.youtube.com/vi/fRGyd0XDK20/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=fRGyd0XDK20",
      videoName:
        "Minecraft ARG but the protagonist is somewhat smart",
    },
  ],
  shorts: [
    {
      videoThumb: "https://i.imgur.com/QzKEXhm.jpeg",
      videoLink: "https://www.youtube.com/shorts/UKnDoPUl8NI",
      videoName: "What is the difference between Frontend and Backend?",
    },
    {
      videoThumb: "https://i.imgur.com/h4Q3UqH.jpeg",
      videoLink: "https://www.youtube.com/shorts/618hwQbBaRQ",
      videoName: "A quick way to transform FIGMA designs into HTML?",
    },
    {
      videoThumb: "https://i.imgur.com/tnRhik1.jpeg",
      videoLink: "https://www.youtube.com/shorts/1ijxZkvxG9Y",
      videoName: "i wasn't supposed to be that smart",
    },
    // {
    //   videoThumb: "https://i.imgur.com/uphZhUr.jpeg",
    //   videoLink: "https://www.youtube.com/shorts/aXDyeA3flBs",
    //   videoName: "lawn mite attacks me and i fricking die",
    // },
    // {
    //   videoThumb: "https://i.imgur.com/uKfyVdN.jpeg",
    //   videoLink: "https://www.youtube.com/shorts/3mWs3VYz_PQ",
    //   videoName: "ok this was my first funny bug i've encountered in here :)",
    // },
  ],
};
