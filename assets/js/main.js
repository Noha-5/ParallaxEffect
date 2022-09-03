/* Author/Developed by: Noha Hamed */
/* Date: September 1, 2022 */

gsap.registerPlugin(ScrollTrigger);
gsap.to('.moon',
        {
            y: 300,
            duration: 3,
            scrollTrigger: {
                scrub: 6,
                trigger: '.div1',
                start: '20% 10%',
                end: '30%',
                toggleActions: 'restart'
            }
        }
        );
        gsap.to('.trees', {
            y: 150,
            duration: 3,
            scrollTrigger: {
                trigger: '.div1',
                scrub: 3,
                start: '20% 10%'
            }
        });
        gsap.to('.lake', {
            y: 100,
            duration: 3,
            scrollTrigger: {
                trigger: '.div1',
                scrub: 3,
                start: '20% 10%'
            }
        });
        gsap.to('.bgMountain', {
            y: 130,
            duration: 3,
            scrollTrigger: {
                trigger: '.div1',
                scrub: 3,
                start: '20% 10%'
            }
        });
        gsap.to('.clouds', {
            x: 500,
            duration: 2,
            scrollTrigger: {
                trigger: '.div1',
                start: '7% top',
                scrub: 3
            }
        });
        gsap.to('.stars', {
            y: 100,
            duration: 2,
            scrollTrigger: {
                trigger: '.div1',
                start: 'top top',
                scrub: 2
            }
        });
        gsap.to('.fstar', {
            x: -300,
            y: 150,
            duration: 1,
            scrollTrigger: {
                trigger: '.div1',
                start: 'top top',
                scrub: 3,
            }
        });
        gsap.to('.gsap', {
            y: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.div2',
                start: 'top 10%',
            }
        });