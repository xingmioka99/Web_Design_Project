// Read item name from URL and show it on confirm page
const params = new URLSearchParams(window.location.search);
const item = params.get("item");

const itemNameEl = document.getElementById("itemName");
if (itemNameEl && item) {
	itemNameEl.textContent = item;
}
