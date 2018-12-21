window.onload = () => {

    const canvas = document.getElementById("sky");
    const ctx = canvas.getContext("2d");

    // set canvas dimensions to window height/width
    const H = window.innerHeight;
    const W = window.innerWidth;
    canvas.width = W;
    canvas.height = H;

    // generate snowflakes

    const maxSnowflakes = 100;
    let snowflakes = [];

    // loop through snowflakes and apply attributes

    for (let i = 0; i < maxSnowflakes; i++) {

        // radius between 2 and 7px
        // minimum density of 1
        snowflakes.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: (Math.random() * 5) + 2,
            d: Math.random() + 1
        })
    }

    const drawSnowflakes = () => {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let i = 0; i < maxSnowflakes; i++) {
            let f = snowflakes[i];
            ctx.moveTo(f.x, f.y);
            // start at top using provided coordinates from 0 degrees to 2pi radians clockwise
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveSnowflakes();
    }

    let angle = 0;

    const moveSnowflakes = () => {
        angle += 0.01;
        for (let i = 0; i < maxSnowflakes; i++) {

            // store current snowflake
            let f = snowflakes[i];

            // update coordinates for snowflake
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            // if snowflake reaches the bottom of the canvas, re-assign y coordinate to send it back to the top
            if (f.y > H) {
                snowflakes[i] = {
                    x: Math.random() * W,
                    y: 0,
                    r: f.r,
                    d: f.d
                };
            }
        }
    }
};