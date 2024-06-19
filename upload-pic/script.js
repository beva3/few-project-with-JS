let profilrPic = document.getElementById('profil-pic');
let inputFile = document.getElementById('input-file');

//console.log("profile pic = ", profilrPic, "\ninput file = ",inputFile);
//console.log("==>",inputFile.files[0]);
inputFile.onchange = ()=>{
    // console.log(URL.createObjectURL(inputFile.files[0]));
    profilrPic.src = URL.createObjectURL(inputFile.files[0])
}