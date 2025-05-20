(function() {
    "use strict";

    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle")

    navToggle.addEventListener("click", function() {
        root.classList.toggle("show-nav");
    });

    const eventPP = document.querySelector("#Js-eventPP");

    const closeEventPP = function (event) {
        function close() {
            document.removeEventListener("keyup", closeEventPP);
            eventPP.removeEventListener("click", closeEventPP);
            root.classList.remove("show-event-popup");
        }

        switch (event.type) {
            case "keyup":
                if (event.key === "Escape" || event.keyCode === 27) close();
                break;
            case "click":
                if (event.target === this || event.target.classList.contains("js-ppCloseBtn"))
                {
                    close();
                    break;
                }
        }
    }
    if (eventPP) {
        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
        eventOpenBtn.addEventListener("click", function() {
            root.classList.add("show-event-popup");
            document.addEventListener("keyuo", clossEventPP);
            eventPP.addEventListener("click", closeEventPP);
        });
    }
})()