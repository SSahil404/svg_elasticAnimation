const path = document.querySelector("path");

let coords = {
    x: 0,
    y: 0,
};

let width = 0;

document.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;

    width = coords.x / window.innerWidth;

    updateCoords(coords);
});

document.addEventListener("mouseout", (e) => {
    gsap.to(path, {
        ease: Elastic.easeOut.config(1, 0.3),
        attr: {
            d: "M250, 0 Q250,250 250, 500",
        },
    });
});

function updateCoords(coords) {
    coords.x = width * 500;
    path.setAttribute("d", `M250, 0 Q${coords.x},${coords.y} 250, 500`);
}
