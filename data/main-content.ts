
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
      
    `,
  },
];


type Video = {
  videoThumb: string;
  videoLink: string;
  videoName: string;
};

type VideosData = {
  commentary: Video[];
  gameplayWithCommentary: Video[];
  gameplayWithoutCommentary: Video[];
  memes: Video[];
  clipCompilation: Video[];
  acting: Video[];
  shorts: Video[];
};

export const videosData: VideosData = {
  commentary: [
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
      videoThumb: "https://img.youtube.com/vi/x--yDYB66NY/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=x--yDYB66NY",
      videoName: "quit aura farming",
    },
  ],
    gameplayWithCommentary: [
      {
        videoThumb: "https://i.ytimg.com/vi/y1tuaJEoJYY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC1joonEiH_c8s8mS6_JjAFNS9IZw",
        videoLink: "https://www.youtube.com/watch?v=y1tuaJEoJYY",
        videoName: "CAN I EVEN SHOW THIS ON HERE ?!?! Dispatch Walkthrough Part 2 (Ep 3 & 4)",
      },
    {
      videoThumb: "https://img.youtube.com/vi/Biq1y-pRtHM/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=Biq1y-pRtHM",
      videoName: "ROBLOX - 99 Days in the Forest (Ft. citizen0618) (REALLY old version)",
    },
    {
      videoThumb: "https://img.youtube.com/vi/At-pAmlVaGs/maxresdefault.jpg",
      videoLink: "https://youtu.be/At-pAmlVaGs?si=2hTeMmH6uT2sEbeF",
      videoName: "Can I make the Prince Buni's pole / essence good? (no)",
    },


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
    {
      videoThumb: "https://i.ytimg.com/vi/ys7nGxdrlqA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAhnMYprpuhBXPGlmGSj3EnHtqPcQ",
      videoLink: "https://www.youtube.com/watch?v=ys7nGxdrlqA",
      videoName:
        "Minecraft ARG but it's the wrong protagonist",
    },
  ],
  shorts: [
    {
      videoThumb: "https://i.imgur.com/QzKEXhm.jpeg",
      videoLink: "https://www.youtube.com/shorts/UKnDoPUl8NI",
      videoName: "What is the difference between Frontend and Backend?",
    },
    {
      videoThumb: "https://img.youtube.com/vi/_LxCblIkt1U/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/shorts/_LxCblIkt1U",
      videoName: "Is THIS a BUG!?",
    },
    {
      videoThumb: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oYiIBKIbwMJ8kMBSAAf0iXAqBqIpmAANiZj0NC~tplv-tiktokx-360p.webp?dr=1363&refresh_token=386d328b&x-expires=1767643200&x-signature=mDqWhAPS2ouV%2BhwJHN0mMJwH52g%3D&t=bacd0480&ps=d97f9a4f&shp=d05b14bd&shcp=1d1a97fc&idc=maliva&biz_tag=tt_video&s=AWEME_DETAIL&sc=feed_cover",
      videoLink: "https://www.tiktok.com/@jaykxle/video/7573706796687248671",
      videoName: "Why do we work here - Part 10",
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
