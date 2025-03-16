const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

result.innerText = "No calculation performed";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both Values are required in inputs. Try again.";
    result.classList.add("error-message");
    return;
  }

  const dividendNumber = parseFloat(dividend);
  const dividerNumber = parseFloat(divider);

  if (isNaN(dividendNumber) || isNaN(dividerNumber)) {

    document.body.innerHTML = "<div class='critical-error'>Something critical went wrong. Please reload the page</div>";
    console.error("Critical Error: Non-numeric input provided.");
    throw new Error("Critical Error: Non-numeric input provided");
    }

    if (dividerNumber === 0) {
      result.innerText = "Division not performed. Inavlid number provided. Try again.";
      result.classList.add("error-message");
      console.error("Error: Attempted division by zero.");
      return;
     }

     let divisionResult = dividendNumber / dividerNumber;

     if (Number.isInteger(divisionResult)) {
      result.innerText = divisionResult;
     } else {
      result.innerText = divisionResult.toFixed(2);
     }

     result.classList.remove("error-message");
});