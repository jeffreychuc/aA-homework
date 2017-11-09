<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.js"></script>

<style>
.hover-submit-outer {
  display: inline-block;
  width: 40px;
  height: 40px;

  /* perfect circle. */
  border-radius: 50%;

  border: 2px solid blue;
}

.hover-submit-inner {
  width: 100%;
  height: 100%;

  background-color: blue;
  border-radius: 50%;

  /* diameter = 1/4 of container width/height */
  transform: scale(0.25);
  transition: transform 0.5s linear;
}

.hover-submit-inner:hover {
  /* expand button to take full size of the container */
  transform: scale(1);
  transition: transform 2s linear;
}
</style>

<form>
  <label>
    Cool Thing
    <input type="text" name="cool_thing">
  </label>
  <br>

  <strong>Create</strong>
  <div class="hover-submit-outer">
    <div class="hover-submit-inner"></div>
  </div>
</form>

<script>
  $("div.hover-submit-inner").on("mouseenter", event => {
    console.log("mouseenter");
    const $div = $(event.currentTarget);

    const timerId = window.setTimeout( () => {
      $div.closest("form").trigger("submit");
    }, 2000);
    $div.data("timer-id", timerId);
  });
  $("div.hover-submit-inner").on("mouseleave", () => {
    console.log("mouseleave");
    const $div = $(event.currentTarget);

    window.clearTimeout($div.data("timer-id"));
    $div.data("timer-id", null);
  });
</script>
