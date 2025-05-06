import $ from "jquery"

$(document).ready(() => {
  // Initialize SlickNav for mobile menu
  $("#menu").slicknav({
    prependTo: "#mobile-menu",
    label: "",
    allowParentLinks: true,
  })
})

// Wait for the document to be fully loaded before running any JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Initialize SlickNav for mobile menu
  // This turns the regular menu into a mobile-friendly dropdown on small screens
  $(() => {
    $("#menu").slicknav({
      prependTo: "#mobile-menu",
      label: "",
      allowParentLinks: true,
    })
  })

  // Add active class to current page in navigation
  // This highlights the current page in the navigation menu
  const currentPage = window.location.pathname.split("/").pop()
  const menuLinks = document.querySelectorAll("#menu a")

  menuLinks.forEach((link) => {
    const linkHref = link.getAttribute("href")
    if (linkHref === currentPage) {
      link.classList.add("active")
    }
  })

  // Simple form validation for contact forms
  // This checks that required fields are filled out before submitting
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      // Get all required inputs in the form
      const requiredInputs = form.querySelectorAll("input[required], textarea[required]")
      let isValid = true

      // Check each required input
      requiredInputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false
          // Add error class to highlight empty fields
          input.classList.add("is-invalid")
        } else {
          input.classList.remove("is-invalid")
        }
      })

      // If form is not valid, prevent submission
      if (!isValid) {
        event.preventDefault()
        alert("Please fill out all required fields.")
      }
    })
  })
})
