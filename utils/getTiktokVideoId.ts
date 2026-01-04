export function getTikTokVideoId(url: string) {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : null;
  }
  