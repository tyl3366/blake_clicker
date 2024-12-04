(function autoProcessPages() {
    const buttonSelector1 = '#PDI_answer65386963'; // Replace with the selector for the first button
    const buttonSelector2 = '#pd-vote-button14724268'; // Replace with the selector for the second button
    const delayBetweenClicks = 200; // Time before clicking the second button
    const delayBeforeGoBack = 400; // Time before going back from the second page
    const delayOnThirdPage = 60000; // Wait 1 minute on the third page (60000ms)

    // Helper to check the current page URL
    const isOnSecondPage = () => {
        return window.location.href.includes('https://poll.fm/14724268/results?msg=voted'); // Replace with a unique part of the second page URL
    };

    const isOnThirdPage = () => {
        return window.location.href.includes('https://poll.fm/14724268/results?msg=revoted'); // Replace with a unique part of the third page URL
    };

    // Actions for the first page
    function performActionsOnFirstPage() {
        const button1 = document.querySelector(buttonSelector1);
        const button2 = document.querySelector(buttonSelector2);

        if (button1 && button2) {
            console.log("Clicking first button...");
            button1.click();

            setTimeout(() => {
                console.log("Clicking second button...");
                button2.click();
            }, delayBetweenClicks);
        } else {
            console.error("One or both buttons not found. Check your selectors.");
        }
    }

    // Navigate back from the second page
    function navigateBackFromSecondPage() {
        console.log("Navigating back to the previous page...");
        setTimeout(() => {
            history.back();
        }, delayBeforeGoBack);
    }

    // Handle actions on the third page
    function handleThirdPage() {
        console.log("On the third page. Waiting for 1 minute...");
        setTimeout(() => {
            console.log("Returning to the original page...");
            history.back();
        }, delayOnThirdPage);
    }

    // Main logic
    if (isOnThirdPage()) {
        console.log("Detected third page.");
        handleThirdPage();
    } else if (isOnSecondPage()) {
        console.log("Detected second page.");
        navigateBackFromSecondPage();
    } else {
        console.log("Detected first page.");
        performActionsOnFirstPage();
    }
})();