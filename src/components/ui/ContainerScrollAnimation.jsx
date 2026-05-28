import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 0→40% entra despacio, 40→80% plana, 80→100% sale
  const rotate    = useTransform(scrollYProgress, [0, 0.40, 0.80, 1], [22, 0, 0, -14]);
  const scale     = useTransform(scrollYProgress, [0, 0.40, 0.80, 1],
                      isMobile ? [0.68, 1, 1, 0.68] : [0.72, 1, 1, 0.72]);
  const translate = useTransform(scrollYProgress, [0, 0.40, 0.80, 1], [60, -40, -80, -160]);

  return (
    <div
      ref={containerRef}
      className="h-[52rem] md:h-[76rem] flex items-center justify-center relative py-2 md:py-20"
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "700px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => (
  <motion.div
    style={{ translateY: translate }}
    className="max-w-5xl mx-auto text-center"
  >
    {titleComponent}
  </motion.div>
);

export const Card = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      width: '100%',
      maxWidth: '72rem',
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="-mt-12 h-[14rem] md:h-[22rem] border-4 border-[#FF1F8F] bg-transparent rounded-[20px] shadow-2xl overflow-hidden"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl md:rounded-2xl">
      {children}
    </div>
  </motion.div>
);
