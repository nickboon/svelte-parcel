<script>
  const url =
    "https://services.odata.org/TripPinRESTierService/(S(j3a2sx1yypgxj1mpzjgmsrgn))/People";

  async function fetchPeople() {
    const response = await fetch(url);
    var json = await response.json();
    return json.value;
  }
</script>

<h1>People</h1>
<ul>
  {#await fetchPeople()}
    loading..
  {:then people}
    {#each people as person}
      <li>{person.UserName}</li>
    {/each}
  {:catch error}
    Could not retrieve people.
  {/await}
</ul>
