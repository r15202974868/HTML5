this.addEventListener('message',(event)=>{
	//接收主线程发送的消息
	console.log(event)
	let number=parseInt(event.data);
	let sum=0;
	for(let n=0;n<=number;n++){
		sum+=n
	}
	//worker线程向主线程发送消息
	this.postMessage(sum);
});