// import plugin, cdn, script, posisi diatas
// waitForKeyElements
const script1 = document.createElement('script')
const posisi_script1 = document.querySelector("head")
script1.setAttribute('src', 'https://hendrik-svm.github.io/js/ekinerja/wfke.js')
posisi_script1.appendChild(script1)
// posisi_script1.insertBefore(script1, posisi_script1.childNodes[0]);


// myScript posisi bawah
const script2 = document.createElement('script')
const posisi_script2 = document.querySelector("body")
script2.setAttribute('src', 'http://svm.miktool.my.id/ekinerja/myscript.js')
script2.setAttribute('id', 'script2')
posisi_script2.appendChild(script2)
