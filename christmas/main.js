const body = document.querySelector("body");
const MIN_DURATION = 10;

function makeSnowflake() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;
  const blur = Math.random();

  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;
  snowflake.style.filter = `blur(${blur}px)`;

  snowflake.addEventListener("mouseover", () => {
    snowflake.classList.add("mouseover");
  });

  snowflake.addEventListener("mouseleave", () => {
    snowflake.classList.remove("mouseover");
  });

  body.appendChild(snowflake);

  setTimeout(() => {
    body.removeChild(snowflake);
    makeSnowflake();
  }, (duration + delay) * 1000);
}

for (let index = 0; index < 500; index++) {
  setTimeout(makeSnowflake, 50 * index);
}
