var pictureSource;
var destinationType;

document.addEventListener("deviceready",onDeviceReady,false);

//after loading ,will trigger
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}



//get photo
function getPhoto(source) {
    //quality : [0,100]
    navigator.camera.getPicture(onPhotoURISuccess,
      function(error){console.log("get pic failed")},
      { quality: 50, destinationType: destinationType.FILE_URI, sourceType: source });
}




 //获取照片成功
function onPhotoURISuccess(imageURI) {
    //打印出照片路径
    alert(imageURI);
    //显示照片
    /*var largeImage = document.getElementById('largeImage');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;*/

    copyFile(imageURI);
}


//上传文件
function upload(fileURL) {

	//上传成功
	var success = function (r) {
	    console.log("上传成功! Code = " + r.responseCode);
	}

	//上传失败
	var fail = function (error) {
	    alert("上传失败! Code = " + error.code);
	}

	var options = new FileUploadOptions();
	options.fileKey = "file1";
	options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
	//options.mimeType = "text/plain";

	//上传参数
	var params = {};
	params.value1 = "test";
	params.value2 = "param";
	options.params = params;

	var ft = new FileTransfer();
	//上传地址
	var SERVER = "http://www.hangge.com/upload.php"
	ft.upload(fileURL, encodeURI(SERVER), success, fail, options);
};





//if user in the offline mode ,using copyFile replace the upload
function copyFile(fileURL){ 
  window.resolveLocalFileSystemURL(fileURL,
    function(fileEntry) {
 
      window.resolveLocalFileSystemURL('cdvfile://localhost/persistent',
        function(dirEntry) {
            fileEntry.copyTo(dirEntry, fileEntry.name, successCallback, errorCallback);

        },
        function(error){console.log("创建失败！")});
 
    },
    function(error){console.log("创建失败！")});
}
 
//文件复制成功
function successCallback(fileEntry) {
 
 alert("文件复制成功！新文件路径：" + fileEntry.toURL());
 fileEntry.file(function(file){
    alert(JSON.stringify(file));
 },function(){
    console.log("get metadata failed");
 });
}
 
//文件复制失败
function errorCallback() {
 alert("文件复制失败！")
}


