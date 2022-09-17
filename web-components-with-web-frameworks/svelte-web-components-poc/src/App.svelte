<script>
  import '../../web-components/hello-world'
  import '../../web-components/counter-wc'

  let color = "red";
  let increment = 1;

  function incrementByOne() {
    increment = 1;
  }

  function incrementByTwo() {
    increment = 2;
  }
</script>

<main>
  <hello-world></hello-world>

  <button on:click="{incrementByOne}">Increment by 1</button>
  <button on:click="{incrementByTwo}">Increment by 2</button>

  <select bind:value={color}>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>

  <counter-wc color={color} increment={increment}></counter-wc>
</main>


