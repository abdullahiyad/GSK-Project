import { getPageLink } from "./link.js";
const linkFromStorage = localStorage.getItem("pageLink");
const linkValue = document.getElementById("link-value"); // Access by id
linkValue.textContent = linkFromStorage; // Call the function to get the link
