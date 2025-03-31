// Разметка
<ul class="my-list">
	<li>First</li>
	<li>Second</li>
	<li>Third</li>
</ul>

// Событие
const list = document.querySelector(".my-list");

function listItemHandler(e) {
  alert('You clicked ' + event.target.innerText);
}

list.addEventListener('click', listItemHandler)
