/* =====================================================
   DEVSTORM 2026 FRONTEND
===================================================== */


/* =====================================================
   HACKATHON COUNTDOWN
===================================================== */

/*
    DEVSTORM starts on:

    28 August 2026
    6:00 PM

    Change this later if organizers confirm
    another start time.
*/

const hackathonStart =
    new Date("August 28, 2026 18:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        hackathonStart - now;


    if (difference <= 0) {

        document.getElementById(
            "countHours"
        ).textContent = "00";


        document.getElementById(
            "countMinutes"
        ).textContent = "00";


        document.getElementById(
            "countSeconds"
        ).textContent = "00";


        return;

    }


    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference /
            1000) % 60
        );


    document.getElementById(
        "countHours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "countMinutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "countSeconds"
    ).textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =====================================================
   BROWSER NOTIFICATIONS
===================================================== */

function enableNotifications() {

    if (!("Notification" in window)) {

        alert(
            "Your browser does not support notifications."
        );

        return;

    }


    Notification.requestPermission()
        .then(permission => {

            if (permission === "granted") {

                new Notification(
                    "DEVSTORM Notifications Enabled 🔔",
                    {
                        body:
                            "You will receive important hackathon reminders."
                    }
                );

            }

            else {

                alert(
                    "Please allow notifications in your browser settings."
                );

            }

        });

}



/* =====================================================
   START BREAK
===================================================== */

function startBreak(
    breakName
) {

    const confirmed =
        confirm(
            `Start ${breakName} break?\n\n` +
            `Remember to scan your QR before leaving.`
        );


    if (!confirmed) {

        return;

    }


    document.getElementById(
        "checkpoint"
    ).textContent =
        `${breakName} break started`;


    if (
        "Notification" in window &&
        Notification.permission === "granted"
    ) {

        new Notification(
            `${breakName} Break Started`,
            {
                body:
                    "Scan your QR before leaving and again when you return."
            }
        );

    }

}



/* =====================================================
   QR SCANNER
===================================================== */

function startScanner() {

    alert(
        "QR Scanner will be connected to the DEVSTORM API in the next phase."
    );

}



/* =====================================================
   DEMO PARTICIPANT INFORMATION
===================================================== */

/*
    This is temporary.

    Later the API will replace this
    information with real database data.
*/

const demoParticipant = {

    room: "204",

    seat: "A-17"

};


function loadDemoParticipant() {

    document.getElementById(
        "roomNumber"
    ).textContent =
        demoParticipant.room;


    document.getElementById(
        "seatNumber"
    ).textContent =
        demoParticipant.seat;

}


/*
    Load demo information.

    We will remove this when the
    backend API is connected.
*/

loadDemoParticipant();