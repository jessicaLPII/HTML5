/*function init(){
	var canvas = document.getElementById('myCanvas');
	canvas.addEventListener("click",desenha);
}
function desenha(event){
	var canvas = document.getElementById('myCanvas');
	var offsetY = canvas.offsetTop;
	var offsetX = canvas.offsetLeft;
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0,0,canvas.width,canvas.height);

	var x = event.clientX;
	var y = event.clientY;
	ctx.fillRect(x-offsetX,y-offsetY,150,150);
	//alert("x="+x+",y="+y);
}

window.onload = init; código da aula passada
*/
/*function init(){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	img.onload = function(){
		ctx.save();// salvei um estado do contexto faço as alterações (proximas linhas)
		ctx.scale(0.5,0.5); //reduz o conteudo do canvas em 50%
		ctx.drawImage(img,0,0);//desenhar imagem no contexto do canvas (parametros: objeto e a posição)
		// posso add a linha anterior novamente para duplicar a imagem, só mudar a posição da imagem
		ctx.restore(); //restauro a imagem antes de 
		var img = new Image(); // criar imagem (objeto do canvas para trabalhar com imagem)
	}
	
	
	
	
		
	img.src="pinguins.jpg";
}
window.onload = init;*/



/*function init(){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	
	var img = new Image();
	img.onload = function(){
		ctx.scale(0.5,0.5);		
		ctx.drawImage(img,0,0);		
		var imageData = ctx.getImageData(0,0,img.width,img.height);//
		var dataArray = imageData.data;
		for(var i=0;i<dataArray.length;i+=4){ // a cada interação ele anda 4 casas (vetor RGBalfa que ele passou no quadro)
			var red = dataArray[i];
			var green = dataArray[i+1];
			var blue = dataArray[i+2];
			var alpha = dataArray[i+3];
			
			/*dataArray[i] = 0.2*red;
			dataArray[i+1] = 1*green;
			dataArray[i+2] = 1*blue;
			dataArray[i+3] = 1*alpha;
			var bw = (red+green+blue)/3; // filtro preto e branco
			
			dataArray[i] = bw;
			dataArray[i+1] = bw;
			dataArray[i+2] = bw;
			dataArray[i+3] = bw;
			
		}
		ctx.putImageData(imageData,0,0);
	}
	img.src="pinguins.jpg";
}
window.onload = init;*/



// fazer tres gatos, um com cada cor (RGB)
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

    function carregaImagemBorder(){//img.onload = function(){
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
			dataArray[i] = (1/4)*red + 0*red + (-1/4)*red;
			dataArray[i+1] = (2/4)*green + 0*green + (-2/4)*green;
			dataArray[i+2] = (1/4)*blue + 0*blue + (-1/4)*blue;
			dataArray[i+3] = 1/4*alpha;
		}
		ctx.putImageData(imageData,0,0);
    	}

	/*img.onload = function(){
		ctx.scale(0.5,0.5);
		ctx.drawImage(img,0,0);
		ctx.drawImage(img,img.width,0);
		ctx.drawImage(img,2*img.width,0);

		var imageData = ctx.getImageData(0, 0, img.width*0.5, img.height*0.5);
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

		imageData = ctx.getImageData(img.width*0.5, 0, img.width*0.5, img.height*0.5);
		dataArray = imageData.data;
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
		ctx.putImageData(imageData,img.width*0.5,0);


		imageData = ctx.getImageData(img.width, 0, img.width*0.5, img.height*0.5);
		dataArray = imageData.data;
		for(var i=0; i < dataArray.length; i+=4){
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];

			dataArray[i] = 0;
			dataArray[i+1] = 0;
			dataArray[i+2] = blue;
			dataArray[i+3] = 1*alpha;
		}
		ctx.putImageData(imageData,2*img.width*0.5,0);
	}*/
	img.src="cachorro.png";
}
window.onload = init;