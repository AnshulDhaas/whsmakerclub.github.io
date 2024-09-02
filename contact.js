function copyEmail1() {
    const email = "560695@my.cuhsd.org";

    navigator.clipboard.writeText(email).then(() => {
        const popup = document.getElementById("popup");
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

function copyEmail2() {
    const email = "560702@my.cuhsd.org";

    navigator.clipboard.writeText(email).then(() => {
        const popup = document.getElementById("popup");
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

function copyEmail3() {
    const email = "560703@my.cuhsd.org";

    navigator.clipboard.writeText(email).then(() => {
        const popup = document.getElementById("popup");
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

function copyEmail4() {
    const email = "561194@my.cuhsd.org";

    navigator.clipboard.writeText(email).then(() => {
        const popup = document.getElementById("popup");
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

function copyEmail5() {
    const email = "560601@my.cuhsd.org";

    navigator.clipboard.writeText(email).then(() => {
        const popup = document.getElementById("popup");
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

function openNewTab() {
    window.open("https://discord.gg/juHSEPNB", '_blank');
}