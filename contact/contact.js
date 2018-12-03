window.addEventListener("load", draw);
window.addEventListener("resize", draw);
function draw() {
    var canvas = document.querySelector('canvas.contentBackground');
    var canvasContainer = document.querySelector('.contactCard');
    var oneEm = Math.floor(Number(getComputedStyle(canvasContainer, "").fontSize.match(/(\d*(\.\d*)?)px/)[1]));
    canvas.width = Math.floor(canvasContainer.clientWidth);
    canvas.height = Math.floor(canvasContainer.clientHeight);
    var canvasPadding = 0.5 * oneEm;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var gradient = ctx.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "#408FEE");
        gradient.addColorStop("1", "#0375EE");

        ctx.shadowBlur = 0.5 * oneEm;
        ctx.shadowColor = "#038AFF";

        ctx.fillStyle = "#000";
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.1 * oneEm;

        ctx.moveTo(0 + canvasPadding, oneEm + canvasPadding);
        ctx.lineTo(oneEm + canvasPadding, 0 + canvasPadding);
        ctx.lineTo(canvas.width - oneEm - canvasPadding, 0 + canvasPadding);
        ctx.lineTo(canvas.width - canvasPadding, oneEm + canvasPadding);
        ctx.lineTo(canvas.width - canvasPadding, canvas.height - oneEm - canvasPadding);
        ctx.lineTo(canvas.width - oneEm - canvasPadding, canvas.height - canvasPadding);
        ctx.lineTo(oneEm + canvasPadding, canvas.height - canvasPadding);
        ctx.lineTo(0 + canvasPadding, canvas.height - oneEm - canvasPadding);
        ctx.lineTo(0 + canvasPadding, oneEm + canvasPadding);
        ctx.fill();
        ctx.stroke();
    }
}