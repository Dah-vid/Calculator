else {
            // Must be a number button!
            if (shouldReplaceDisplay) {
            display.textContent = event.target.textContent;  // Replace
            shouldReplaceDisplay = false;  // Turn off flag
            } else {
                display.textContent += event.target.textContent;  // Append
            }

            }