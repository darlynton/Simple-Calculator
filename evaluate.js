function display() {
	var dis = document.getElementById('first_name').value;
	if (dis.length > 0) {
	//alert('Welcome ' + dis);
	}
	};

function col(val)
{
document.getElementById("show").value = val;

}
function fig(val)
{
document.getElementById("show").value += val;
}

//This function equates the figures
function enter() 
{ 
try 
{ 
  col(eval(document.getElementById("show").value)) 
} 
catch(e) 
{
  col('Error') 
} 
} 

