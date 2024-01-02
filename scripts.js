// Get the parallax image element
const parallaxImg = document.querySelector('.parallax-img');

// Add event listener for scroll
/**
 * Adds a scroll event listener to the window 
 * that calculates how much to move the parallax image based on 
 * the scroll position and window height.
 * 
 * The scroll position divided by window height 
 * gives a percentage scrolled value that is 
 * multiplied by 10 to get the image movement amount in pixels.
 * 
 * The image is then translated on the Y axis by the negative
 * of the movement amount using a CSS transform.
*/
window.addEventListener('scroll', function () {

  // Calculate the amount to move the image based on scroll position 
  const scrollTop = window.pageYOffset;
  const winHeight = window.innerHeight;
  const imgMoveAmount = scrollTop / winHeight * 10;

  // Update the CSS transform property to move the image
  parallaxImg.style.transform = `translateY(-${imgMoveAmount}px)`;

});
