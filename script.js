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
(document.querySelector('meta[name="author"]') || document.head.appendChild(document.createElement("meta"))).setAttribute("name", "author"), document.querySelector('meta[name="author"]').setAttribute("content", "Shrishail Bagale");




