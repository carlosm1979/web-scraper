import { useScraperStore } from "../store";

export const DisplayPanel = () => {
  const { content } = useScraperStore()

  return (<div>{content}</div>)
}
