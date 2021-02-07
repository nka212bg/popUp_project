// open popover at the 3th second if no popoverState in localStorage
localStorage.popoverState || setTimeout(Popover().open, 3000);

function Popover() {
    const popoverElement = document.getElementById("popover");
    const popover__container = document.querySelector(".app-popover__container");
    const chisel = document.getElementById("chisel");
    const shavings = document.getElementById("shavings");

    return {
        open() {
            popoverElement.style.display = "block";

            // position top 150px
            popover__container.style.top = window.scrollY + 150 + "px";

            // save the state (to prevent future oppening)
            // localStorage.popoverState = true;

            // close the popover if esc button is pressed
            document.onkeyup = (e) => e.key !== "Escape" || Popover().close();

            // close the popover if  the popover overlay is pressed
            popoverElement.onclick = (e) => !e.target.classList.contains("app-popover") || Popover().close();

            // paralax chisel and shavings 
            window.onscroll = () => {
                let direction = this.oldScroll > this.scrollY ? -1.1 : 1;
                this.oldScroll = this.scrollY;
                chisel.style.top = chisel.offsetTop + (10 * direction) + "px";
                shavings.style.top = shavings.offsetTop + (23 * direction) + "px";
            };
        },
        close() {
            popoverElement.style.display = "none";
        }
    }
}







