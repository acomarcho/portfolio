import { useWindowScroll } from "@mantine/hooks";
import { IconArrowBigUpFilled } from "@tabler/icons-react";

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  if (scroll.y > 0) {
    return (
      <button
        className="fixed bottom-[1rem] right-[1rem] bg-darkgray p-[0.5rem] drop-shadow-xl font-jakarta text-black font-bold"
        onClick={() => scrollTo({ y: 0 })}
      >
        <IconArrowBigUpFilled />
      </button>
    );
  }
}
