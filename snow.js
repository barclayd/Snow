window.onload = () => {

    const canvas = document.getElementById("sky");
    const ctx = canvas.getContext("2d");

    // set canvas dimensions to window height/width
    const H = window.innerHeight;
    const W = window.innerWidth;
    canvas.width = W;
    canvas.height = H;
};