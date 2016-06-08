var a=[0,0,0,0,0,0,0,0,0];
var b=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var j;
var flag=0;
function showDiv(value) {
			document.getElementById('button'+value.toString()).style.display="none";
			if (flag===0) {
				document.getElementById('box'+value.toString()).style.display="block";
				a[value-1]=1;
				if(checkover(1)==1){
					if(confirm("Congratulations you Won!!")==true)
						newgame();
				}
				var socket = io('http://localhost');
			    socket.emit('clicked', { box: value });
	    		socket.on('value', function f(data) {
	    			flag=1;
	    	    	showDiv(data);
	    		});
			}
			else{
				document.getElementById('box1'+value.toString()).style.display="block";
				flag=0;
				a[value-1]=2;
				if(checkover(2)==1){
					if(confirm("Sorry you Lost!!")==true)
						newgame();
				}
			}
		}
function newgame(){
	location.reload();
}
function checkover(i){
			for(j=0;j<8;j++){
				if(a[b[j][0]]==i&&a[b[j][1]]==i&&a[b[j][2]]==i)
					return 1;
			}
	return 0;
}