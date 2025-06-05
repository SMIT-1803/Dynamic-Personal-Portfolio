export const fadeIn=({
  initial: {
    opacity: 0,
    y: 100,
  },
  animate:(delay=1)=>({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05*delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
})

export const hoverEffect = {
  initial: {
    backgroundColor: "#fb923c",
  },
  animate: {
    backgroundColor: "#ffffff",
    transition: {
      delay: 0.05,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};


export const leftIn = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const redirectArrow = {
  animate: {
    x: [0, 5, 0], // back and forth horizontally
    y: [0, -5, 0],
    transition: {
      repeat: Infinity,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};


export const rightIn = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


export const rotation = {
    animate:{
        rotate:360,
        transition:{
            repeat:Infinity,
            duration:5,
            ease:"linear"
        }
    }
}