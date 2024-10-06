import { open } from "@raycast/api";

export default async function main(props: { arguments: { url: string } }) {
  const { url } = props.arguments;
  await open(`infuse://x-callback-url/play?url=${url}`);
}
