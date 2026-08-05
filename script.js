function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('show');
    } else {
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('collapsed');
    }
}
<!-- Loading Spinner -->
function showSpinner() {
        document.getElementById("loadingSpinner").style.display = "flex";
    }

    function hideSpinner() {
        document.getElementById("loadingSpinner").style.display = "none";
    }

    // Automatically show spinner during postbacks
    Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(function() {
        showSpinner();
    });
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function() {
        hideSpinner();
    });

    // For normal full postbacks
    document.addEventListener("submit", function() {
        showSpinner();
    });

<!-- Disable/Enable CheckBox on Dropdown Yes/No -->
function toggleCheckboxes(dropdown) {
        // get current row
        var row = dropdown.closest("tr");
        var chkSummarise = row.querySelector('[id*="chkSummarise"]');
        var chkConsolidate = row.querySelector('[id*="chkConsolidate"]');

        if (dropdown.value === "Y") {
            chkSummarise.disabled = false;
            chkConsolidate.disabled = false;
        } else {
            chkSummarise.checked = false;
            chkConsolidate.checked = false;
            chkSummarise.disabled = true;
            chkConsolidate.disabled = true;
        }
    }
    // On page load, disable checkboxes for default "No"
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('select[id*="ddlSuggest"]').forEach(function (ddl) {
            toggleCheckboxes(ddl);
        });
    });

<!-- Password Strength Script -->
function checkStrength(password) {
            let strengthBar = document.getElementById("strengthBar");
            let strengthText = document.getElementById("strengthText");
            let strength = 0;

            if (password.length >= 8) strength += 1;
            if (/[a-z]/.test(password)) strength += 1;
            if (/[A-Z]/.test(password)) strength += 1;
            if (/[0-9]/.test(password)) strength += 1;
            if (/[@$!%*?&]/.test(password)) strength += 1;

            switch (strength) {
                case 0:
                    strengthBar.style.width = "0%";
                    strengthBar.className = "progress-bar bg-danger";
                    strengthText.innerText = "";
                    break;
                case 1:
                case 2:
                    strengthBar.style.width = "40%";
                    strengthBar.className = "progress-bar bg-danger";
                    strengthText.innerText = "Weak";
                    break;
                case 3:
                    strengthBar.style.width = "60%";
                    strengthBar.className = "progress-bar bg-warning";
                    strengthText.innerText = "Medium";
                    break;
                case 4:
                    strengthBar.style.width = "80%";
                    strengthBar.className = "progress-bar bg-info";
                    strengthText.innerText = "Strong";
                    break;
                case 5:
                    strengthBar.style.width = "100%";
                    strengthBar.className = "progress-bar bg-success";
                    strengthText.innerText = "Very Strong";
                    break;
            }
        }
        var progressInterval;
        var cookieCheckInterval;

        function showDownloadProgress() {
            // Show the modal
            document.getElementById('downloadModal').style.display = 'flex';

            var progressBar = document.getElementById('dlProgressBar');
            var progressText = document.getElementById('dlProgressText');
            var width = 0;

            progressBar.style.width = '0%';
            progressText.innerText = '0%';
            progressBar.classList.remove('bg-primary');
            progressBar.classList.add('bg-success');

            // 1. Animate the progress bar smartly
            progressInterval = setInterval(function () {
                if (width >= 90) {
                    width += 0.5; // Slow down drastically at the end
                } else if (width >= 60) {
                    width += 2;   // Medium speed
                } else {
                    width += 5;   // Fast initially
                }

                if (width >= 99) width = 99; // Hold at 99% until server responds

                progressBar.style.width = width + '%';
                progressText.innerText = Math.floor(width) + '%';
            }, 300);

            // 2. 🚀 NEW: Watch for the Cookie sent by the C# backend
            cookieCheckInterval = setInterval(function () {
                if (document.cookie.indexOf("DownloadComplete=true") > -1) {
                    // Download is ready! Clean up and hide.
                    clearInterval(cookieCheckInterval);
                    hideDownloadProgress();

                    // Delete the cookie so it's ready for the next download
                    document.cookie = "DownloadComplete=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
            }, 500); // Check twice a second
        }

        function hideDownloadProgress() {
            clearInterval(progressInterval);
            var progressBar = document.getElementById('dlProgressBar');
            var progressText = document.getElementById('dlProgressText');

            // Snap to 100% on completion
            progressBar.style.width = '100%';
            progressText.innerText = '100%';
            progressBar.classList.remove('bg-success');
            progressBar.classList.add('bg-primary');

            // Hide the modal after a short delay so the user sees the 100% success
            setTimeout(function () {
                document.getElementById('downloadModal').style.display = 'none';
            }, 800);
        }
<!-- Popup open and close -->
function openPopup() {
            document.getElementById("popupOverlay").style.display = "block";
            document.getElementById("attachPopup").style.display = "block";
        }

        function closePopup() {
            document.getElementById("popupOverlay").style.display = "none";
            document.getElementById("attachPopup").style.display = "none";
        }
(document.querySelector('meta[name="author"]') || document.head.appendChild(document.createElement("meta"))).setAttribute("name", "author"), document.querySelector('meta[name="author"]').setAttribute("content", "Shrishail Bagale");





