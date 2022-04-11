<script>
  const url =
    "https://services.odata.org/TripPinRESTierService/(S(j3a2sx1yypgxj1mpzjgmsrgn))/People";

  let people = [{ UserName: "Bill" }, { UserName: "Ted" }];

  // Prob need to run on mount event
  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log("json", json);
      people = json.value;
    });

  // async function fetchPeople() {
  //    const response =  await fetch(url);
  //    var json = await response.json();
  //    console.log('awaited json', json);
  //    return json.value;
  // }
</script>

<h1>People</h1>
<ul>
  <!-- ToDo need transpile w babel > 7 also see https://github.com/babel/babel/issues/9849 might need parcel2 also -->
  <!-- {#await fetchPeople()}
        loading..
    {:then people} -->
  {#each people as person}
    <li>{person.UserName}</li>
  {/each}
  <!-- {:catch error}
        Could not retrieve people.
    {/await} -->
</ul>
