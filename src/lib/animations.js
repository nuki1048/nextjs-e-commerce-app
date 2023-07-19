import { useInView, useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

export const useAnimations = (x = 100, y = 100) => {
  const fromTopSpring = useSpring({
    from: {
      opacity: 0,
      y: y * -1,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  const fromTopView = useInView(
    () => ({
      from: {
        opacity: 0,
        y: y * -1,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    { once: true }
  );

  const fromRightSpring = useSpring({
    from: {
      opacity: 0,
      x,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  });
  const fromRightView = useInView(
    () => ({
      from: {
        opacity: 0,
        x,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { once: true }
  );
  const fromLeftSpring = useSpring({
    from: {
      opacity: 0,
      x: x * -1,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  });
  const fromLeftView = useInView(
    () => ({
      from: {
        opacity: 0,
        x: x * -1,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { once: true }
  );

  const fromBottomSpring = useSpring({
    from: {
      opacity: 0,
      y,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });
  const fromBottomView = useInView(
    () => ({
      from: {
        opacity: 0,
        y,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    { once: true }
  );

  const opacitySpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const opacityView = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    }),
    { once: true }
  );

  const AnimatedLink = animated(Link);
  const AnimatedImage = animated(Image);

  return {
    fromTopSpring,
    fromTopView,
    fromRightSpring,
    fromRightView,
    fromLeftSpring,
    fromLeftView,
    fromBottomSpring,
    fromBottomView,
    opacitySpring,
    opacityView,
    AnimatedLink,
    AnimatedImage,
  };
};
