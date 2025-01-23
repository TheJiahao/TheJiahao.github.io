import type {
    TransitionAnimationPair,
    TransitionDirectionalAnimations,
} from "astro";

const slideUpAnimation: TransitionAnimationPair = {
    old: {
        name: "slide-in-up",
        duration: 100,
        easing: "ease-in",
        direction: "reverse",
    },
    new: {
        name: "slide-in-up",
        duration: 100,
        easing: "ease-in-out",
    },
};

export const slideUpTransition: TransitionDirectionalAnimations = {
    forwards: slideUpAnimation,
    backwards: slideUpAnimation,
};
