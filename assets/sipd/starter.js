let build = "20260614-0000";
const alamat_starter = "kemendagri.go.id";
const url_starter = location.href;
if (url_starter.search(alamat_starter) != -1) {
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

    
    // //!create script.js
    //! aktifkan jika sudah mode produksion
    const script = document.createElement("script");
    if (localStorage.script == null) {
        $.get(
            "https://hendrik-svm.github.io/assets/sipd/script.js?t=" + build,
            function (data, status) {
                localStorage.script = data;
                script.innerHTML = data;
                script_svm.appendChild(script);
            }
        );
    } else {
        if (localStorage.script != "") {
            script.innerHTML = localStorage.script;
            script_svm.appendChild(script);
        } else {
            $.get(
                "https://hendrik-svm.github.io/assets/sipd/script.js?t=" + build,
                function (data, status) {
                    localStorage.script = data;
                    script.innerHTML = data;
                    script_svm.appendChild(script);
                }
            );
        }
    }
}
