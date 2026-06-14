const alamat_starter = "kemendagri.go.id";
const url_starter = location.href;
if (url_starter.search(alamat_starter) != -1) {
    //! build version
    let build = "20260614-2152";
    if (localStorage.build != null) {
        if (localStorage.build != build) {
            localStorage.script = "";
            localStorage.build = build;
        }
    } else {
        localStorage.build = build;
        localStorage.script = "";
    }

    const div1 = document.createElement("div");
    const posisi_div1 = document.querySelector("body");
    div1.setAttribute("id", "svm");
    posisi_div1.appendChild(div1);
    const script_svm = document.querySelector("#svm");

    if (
        localStorage.script == ""
    ) {
        // wait for another context to populate localStorage.script,
        // but guard against infinite reload loops using a flag
        var cek_var = setInterval(() => {
            if (
                localStorage.script != ""
            ) {
                clearInterval(cek_var);
                if (!localStorage.svm_reload_done) {
                    localStorage.svm_reload_done = '1';
                    location.reload();
                }
            }
        }, 1000);
    }

    // //!create script.js
    //! aktifkan jika sudah mode produksion
    const script6 = document.createElement("script");
    if (localStorage.script == null) {
        const url = "https://hendrik-svm.pages.dev/ekinerja/assets/js/script.js?t=" + build;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s
        fetch(url, { signal: controller.signal })
            .then(function (response) {
                clearTimeout(timeoutId);
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(function (data) {
                localStorage.script = data;
                script6.textContent = data;
                script_svm.appendChild(script6);
            })
            .catch(function (err) {
                console.error('Failed to fetch script:', err);
            });
    } else {
        if (localStorage.script != "") {
            script6.textContent = localStorage.script;
            script_svm.appendChild(script6);
        } else {
            const url = "https://hendrik-svm.pages.dev/ekinerja/assets/js/script.js?t=" + build;
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s
            fetch(url, { signal: controller.signal })
                .then(function (response) {
                    clearTimeout(timeoutId);
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then(function (data) {
                    localStorage.script = data;
                    script6.textContent = data;
                    script_svm.appendChild(script6);
                })
                .catch(function (err) {
                    console.error('Failed to fetch script:', err);
                });
        }
    }
}
