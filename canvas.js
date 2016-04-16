function init(){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');	
	var img = new Image();

    var btnImage = document.getElementById("dog");
    var btnImageRed = document.getElementById("R");
    var btnImageGreen = document.getElementById("G");
    var btnImageBlue = document.getElementById("B");
    var btnImageGray = document.getElementById("GR");
    var btnImageBorder = document.getElementById("BR");

    btnImage.addEventListener("click", carregaImagem);
    btnImageRed.addEventListener("click", carregaImagemRed);
    btnImageGreen.addEventListener("click", carregaImagemGreen);
    btnImageBlue.addEventListener("click", carregaImagemBlue);
    btnImageGray.addEventListener("click", carregaImagemGray);
    btnImageBorder.addEventListener("click", carregaImagemBorder);

   
     
    //function carregaImagem(){
    	function carregaImagem(){//img.onload = function(){
		//ctx.scale(0.5,0.5);
		ctx.drawImage(img,0,0);
		//ctx.drawImage(img,img.width,0);
		//ctx.drawImage(img,2*img.width,0);

		var imageData = ctx.getImageData(0, 0, img.width, img.height);
		var dataArray = imageData.data;
		for(var i=0; i < dataArray.length; i+=4){
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			var bw = (red + green + blue)/3;
			dataArray[i] = red;
			dataArray[i+1] = green;
			dataArray[i+2] = blue;
			dataArray[i+3] = 1*alpha;
		}
		ctx.putImageData(imageData,0,0);
    	}
    //}

    function carregaImagemRed(){//img.onload = function(){
		//ctx.scale(0.5,0.5);
		ctx.drawImage(img,0,0);
		//ctx.drawImage(img,img.width,0);
		//ctx.drawImage(img,2*img.width,0);

		var imageData = ctx.getImageData(0, 0, img.width, img.height);
		var dataArray = imageData.data;
		for(var i=0; i < dataArray.length; i+=4){
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			var bw = (red + green + blue)/3;
			dataArray[i] = red;
			dataArray[i+1] = 0;
			dataArray[i+2] = 0;
			dataArray[i+3] = 1*alpha;
		}
		ctx.putImageData(imageData,0,0);
    	}

    function carregaImagemGreen(){//img.onload = function(){
		//ctx.scale(0.5,0.5);
		ctx.drawImage(img,0,0);
		//ctx.drawImage(img,img.width,0);
		//ctx.drawImage(img,2*img.width,0);

		var imageData = ctx.getImageData(0, 0, img.width, img.height);
		var dataArray = imageData.data;
		for(var i=0; i < dataArray.length; i+=4){
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			var bw = (red + green + blue)/3;
			dataArray[i] = 0;
			dataArray[i+1] = green;
			dataArray[i+2] = 0;
			dataArray[i+3] = 1*alpha;
		}
		ctx.putImageData(imageData,0,0);
    	}

   	function carregaImagemBlue(){//img.onload = function(){
		//ctx.scale(0.5,0.5);
		ctx.drawImage(img,0,0);
		//ctx.drawImage(img,img.width,0);
		//ctx.drawImage(img,2*img.width,0);

		var imageData = ctx.getImageData(0, 0, img.width, img.height);
		var dataArray = imageData.data;
		for(var i=0; i < dataArray.length; i+=4){
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			var bw = (red + green + blue)/3;
			dataArray[i] = 0;
			dataArray[i+1] = 0;
			dataArray[i+2] = blue;
			dataArray[i+3] = 1*alpha;
		}
		ctx.putImageData(imageData,0,0);
    	}

    function carregaImagemGray(){//img.onload = function(){
		//ctx.scale(0.5,0.5);
		ctx.drawImage(img,0,0);
		//ctx.drawImage(img,img.width,0);
		//ctx.drawImage(img,2*img.width,0);

		var imageData = ctx.getImageData(0, 0, img.width, img.height);
		var dataArray = imageData.data;
		for(var i=0; i < dataArray.length; i+=4){
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			var bw = (red + green + blue)/3;
			dataArray[i] = bw;
			dataArray[i+1] = bw;
			dataArray[i+2] = bw;
			dataArray[i+3] = 1*alpha;
		}
		ctx.putImageData(imageData,0,0);
    	}

    function edge(input, context) {
    var w = input.width, h = input.height;
    var output = context.createImageData(w, h);
    var inputData = input.data;
    var outputData = output.data;
    var bytesPerRow = w * 4;
    var pixel = bytesPerRow + 4; // Start at (1,1)
    var hm1 = h - 1;
    var wm1 = w - 1;
    for (var y = 1; y < hm1; ++y) {
        // Prepare initial cached values for current row

        var centerRow = pixel - 4;
        var priorRow = centerRow - bytesPerRow;
        var nextRow = centerRow + bytesPerRow;

        var r1 = inputData[priorRow]   + inputData[centerRow]   + inputData[nextRow];
        var g1 = inputData[++priorRow] + inputData[++centerRow] + inputData[++nextRow];
        var b1 = inputData[++priorRow] + inputData[++centerRow] + inputData[++nextRow];

        var rp = inputData[priorRow += 2];
        var gp = inputData[++priorRow];
        var bp = inputData[++priorRow];

        var rc = inputData[centerRow += 2];
        var gc = inputData[++centerRow];
        var bc = inputData[++centerRow];

        var rn = inputData[nextRow += 2];
        var gn = inputData[++nextRow];
        var bn = inputData[++nextRow];

        var r2 = rp + rc + rn;
        var g2 = gp + gc + gn;
        var b2 = bp + bc + bn;
        
        // Main convolution loop
        for (var x = 1; x < wm1; ++x) {
            centerRow = pixel + 4;
            priorRow = centerRow - bytesPerRow;
            nextRow = centerRow + bytesPerRow;

            var r = 0 + (rc << 3) - r1 - rp - rn;
            var g = 0 + (gc << 3) - g1 - gp - gn;
            var b = 0 + (bc << 3) - b1 - bp - bn;

            r1 = r2;
            g1 = g2;
            b1 = b2;

            rp = inputData[  priorRow];
            gp = inputData[++priorRow];
            bp = inputData[++priorRow];

            rc = inputData[  centerRow];
            gc = inputData[++centerRow];
            bc = inputData[++centerRow];

            rn = inputData[  nextRow];
            gn = inputData[++nextRow];
            bn = inputData[++nextRow];

            r2 = rp + rc + rn;
            g2 = gp + gc + gn;
            b2 = bp + bc + bn;

            outputData[pixel] = r - r2;
            outputData[++pixel] = g - g2;
            outputData[++pixel] = b - b2;
            outputData[++pixel] = 255; // alpha
            ++pixel;
        }
        pixel += 8;
    }
    return output;
}

function carregaImagemBorder() {
      var imageData = ctx.getImageData(0, 0, img.width, img.height);
      imageData = edge(imageData, ctx);

      ctx.putImageData(imageData, 0, 0);
}
	img.src="cachorro.png";
}
window.onload = init;