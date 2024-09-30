import { gsap } from "gsap";

export default function animationTabs(item, direction) {
    switch (direction) {
        case 'right-left':
            gsap.fromTo(item, { x: '70%' }, { x: 0, ease: "back.out", duration: 1, });
            break;
        case 'left-right':
            gsap.fromTo(item, { x: '-100%' }, { x: 0, ease: "back.out", duration: 1 });
            break;
        case 'bottom-top':
            gsap.fromTo(item, { y: '50%' }, { y: 0, ease: "back.out", duration: 1 });
            break;
    }

}