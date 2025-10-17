document.addEventListener("DOMContentLoaded", function () {
        const grid = document.getElementById("<%= gvParaSuggestion.ClientID %>");
        const searchBox = document.getElementById("txtSearch");

        const lblTotal = document.getElementById("<%= lblTotalPara.ClientID %>");
        const lblSuggest = document.getElementById("<%= lblSuggestTotal.ClientID %>");
        const lblSummarise = document.getElementById("<%= lblSummariseTotal.ClientID %>");
        const lblConsolidate = document.getElementById("<%= lblConsolidateTotal.ClientID %>");

        const PARA_NO_INDEX = 0;
        const PARA_HEADING_INDEX = 1;

        function updateTotals() {
            let total = 0, suggest = 0, summarise = 0, consolidate = 0;

            const rows = grid.querySelectorAll("tr");
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                if (row.style.display === "none") continue; // skip hidden from search
                total++;

                const ddlSuggest = row.querySelector("select[id*='ddlSuggest']");
                const chkSummarise = row.querySelector("input[id*='chkSummarise']");
                const chkConsolidate = row.querySelector("input[id*='chkConsolidate']");

                if (ddlSuggest && ddlSuggest.value === "Y") suggest++;
                if (chkSummarise && chkSummarise.checked) summarise++;
                if (chkConsolidate && chkConsolidate.checked) consolidate++;
            }

            lblTotal.textContent = total;
            lblSuggest.textContent = suggest;
            lblSummarise.textContent = summarise;
            lblConsolidate.textContent = consolidate;
        }

        // 🔍 Filter by Para No and Heading
        searchBox.addEventListener("keyup", function () {
            const filter = this.value.toLowerCase();
            const rows = grid.querySelectorAll("tr");

            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName("td");
                if (cells.length > PARA_HEADING_INDEX) {
                    const paraNo = cells[PARA_NO_INDEX].innerText.toLowerCase();
                    const paraHeading = cells[PARA_HEADING_INDEX].innerText.toLowerCase();

                    rows[i].style.display = (paraNo.includes(filter) || paraHeading.includes(filter)) ? "" : "none";
                }
            }

            updateTotals();
        });

        // 👁️ Update totals when Suggest dropdown or checkboxes change
        grid.addEventListener("change", function (e) {
            if (e.target.id.includes("ddlSuggest")) {
                const row = e.target.closest("tr");
                const chkSummarise = row.querySelector("input[id*='chkSummarise']");
                const chkConsolidate = row.querySelector("input[id*='chkConsolidate']");

                // Enable/disable based on Suggest value
                const isYes = e.target.value === "Y";
                chkSummarise.disabled = !isYes;
                chkConsolidate.disabled = !isYes;

                if (!isYes) {
                    chkSummarise.checked = false;
                    chkConsolidate.checked = false;
                }
            }
            updateTotals();
        });

        // Run once when grid loads
        updateTotals();
    });
