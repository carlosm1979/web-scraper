import { useScraperStore } from "../store";
export const DisplayPanel = () => {
  const { content } = useScraperStore()

  return (<pre>{content}</pre>)
}
