import { useMediaQuery } from "react-responsive";

export const mediaQuery = () => {
  // const isMobile = useMediaQuery("(max-width: 767px)");
  // const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1280px)");
  // const isSmallTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  // const isBigTablet = useMediaQuery("(min-width: 1024px) and (max-width: 1280px)");
  // const isDesktop = useMediaQuery("(min-width: 1281px)");

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1280px)",
  });
  const isSmallTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isBigTablet = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1280px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1281px)" });

  const screenSize = {
    isMobile,
    isTablet,
    isSmallTablet,
    isBigTablet,
    isDesktop,
  };

  return screenSize;
};

export default mediaQuery;
