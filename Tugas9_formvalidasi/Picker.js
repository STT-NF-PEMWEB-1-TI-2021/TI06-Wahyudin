const hs = document.getElementById("hasil")
const binatang = document.getElementById("binatang")
function imagePicker() {
    if (binatang.value == "k") {
        return hs.src = "singa.png"
    } else if (binatang.value == "g") {
        return hs.src = "zebra.png"
    } else if (binatang.value == "a") {
        return hs.src = "jerapah.png"
    } else if (binatang.value == "e") {
        return hs.src = "macan.png"
    } else {
        return hs.src = "gajah.png"
    }
}
function imageConfirmation() {
    alert(hs.src)
}