function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
}

locoScroll()


function cursorEffect() {
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")
    page1Content.addEventListener("mousemove", function(dets) {
        // console.log(dets.y);
        // cursor.style.left = dets.x + "px";
        // cursor.style.top = dets.y + "px";
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect()

function cursorEffect2() {
    var page4 = document.querySelector("#page4")
    var cursor2 = document.querySelector("#cursor2")
    page4.addEventListener("mousemove", function(dets) {
        // console.log(dets.y);
        // cursor.style.left = dets.x + "px";
        // cursor.style.top = dets.y + "px";
        gsap.to(cursor2, {
            x: dets.x,
            y: dets.y
        })
    })

    page4.addEventListener("mouseenter", function() {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1
        })
    })
    page4.addEventListener("mouseleave", function() {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect2()

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        durartion: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            // markers: true,
            scrub: 2
        }
    })
}
page2Animation()

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
}
swiper()

var tl = gsap.timeline()
tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    durartion: 1,
    stagger: 0.1
})
tl.to("#loader", {

    x: -40,
    stagger: 0.1,
    durartion: 1
})
tl.to("#loader", {
    opacity: 0,
})
tl.from("#page1-content h1", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    durartion: 1,
    delay: -0.5
})
tl.to("#loader", {
    // <h1 class="">Heading</h1>
    display: "none"

})