function calc(val)
{
document.getElementById("d").value = val;

}
function v(val)
{
document.getElementById("d").value += val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
} 

function display() {
	var dis = document.getElementById('first_name').value;
	if (dis.length > 0) {
	alert('Welcome ' + dis);
	}
	};