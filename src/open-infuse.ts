import { open } from "@raycast/api";

export default async function main(props: { arguments: { url: string, action: string } }) {
  const { url, action } = props.arguments;
  const encodedUrl = encodeURIComponent(url);
  
  if (action === "save") {
    await open(`infuse://x-callback-url/save?url=${encodedUrl}`);
  } else if (action === "play") {
    await open(`infuse://x-callback-url/play?url=${encodedUrl}`);
  }
}
