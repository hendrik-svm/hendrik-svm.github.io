//AWAL --------------------------------------------------------------------------------
    const div1 = document.createElement('div');
    //const div2 = document.createElement('div');
    const button = document.createElement('button');

    // sett attribut tag
    div1.setAttribute('class', 'text-center');
    div1.setAttribute('id', 'div2');
    //div2.setAttribute('class', 'text-center');
    //div2.setAttribute('id', 'div2');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-danger text-center ');
    button.setAttribute('id', 'btn');

    const script2 = document.createElement('script');
    script2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/promise-polyfill');
    script2.setAttribute('id', 'svm2');



    const text1 = document.createTextNode('Mod Ekinerja V.0.1 By : Hendrik Svm');
    const text2 = document.createTextNode('Hitung Jam Kerja');
    div1.appendChild(text1);
    button.appendChild(text2);
    //div2.appendChild(button);


    const satu = document.querySelector("body > footer");
    satu.appendChild(div1);
    satu.appendChild(script2);

    //tombol button
    const dua = document.querySelector("#content > div.navbar.navbar-fixed-top > div > div > ul:nth-child(1)");
    dua.appendChild(button);
    document.getElementById('btn').addEventListener('click', function () {
        const cek = document.querySelector("#mytable > tbody > tr:nth-child(2) > td:nth-child(1)");
        if (cek != null) {
            //jumlah nomor pekerjaan
            const jumlah_pekerjaan = document.getElementsByTagName('tr').length - 5;
            if (document.getElementById('limit').value != 1000) {
                alert('set limit ke angka 1000 agar terhitung semua');
            } else {
                var a = 2;
                var jumlah_menit = 0;
                var sisa = 0;
                var pesan, icon;
                for (var i = 1; i <= jumlah_pekerjaan; i++) {
                    // tr:nth-child(2) baris ke 1 dan seterusnya
                    // document.querySelector("#mytable > tbody > tr:nth-child(2) > td:nth-child(3)")
                    let str = document.querySelector("#mytable > tbody > tr:nth-child(" + a++ + ") > td:nth-child(3)").textContent;
                    const pos = str.indexOf(' ');
                    let menit = parseInt(str.substring(0, pos));
                    jumlah_menit = jumlah_menit + menit;

                    if (jumlah_menit >= 6750) {
                        pesan = 'Selamat, Target Kinerja Tercapai';
                        icon = 'success';
                    } else {
                        sisa = 6750 - jumlah_menit;
                        pesan = 'Jumlah jam kerja anda masih kurang ' + sisa + ' Menit';
                        icon = 'error';
                    };
                };
                Swal.fire(
                    jumlah_menit + ' Menit',
                    pesan,
                    icon
                )
            }
        } else {
            alert('Maaf, Tidak ditemukan list daftar pekerjaan yg akan di hitung..');
        }
    });
    //AKHIR --------------------------------------------------------------------------------
