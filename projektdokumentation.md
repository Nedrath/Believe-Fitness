# Trainer - Fitnesscentre

<br>

## Dokumentation Mark Eriksen - WUHF03

<br>

**Applikation teknologi stack (npm packages, frameworks):**
<br>

```
React
JS, CSS, HTML
API
Netlify
```

- [**URL -** **netlify**](https://svendeprove-Mark.netlify.app)
- [**URL -** **Localhost**](http://localhost:1234)
- **Brugernavn** : user1
- **Password** : 1234

<br>

**Redegørelse for tredjeparts kode:**

> _@emotion/css_

- Jeg bruger emotion til at style direkte i mine JS/react components.

> _@reach/router_

- til at navigere og linke mellem de forskellige sider, components osv.

> _React-Hook-Form:_

- er brugt for nemmere at håndtere forms og deres requests, her til login og validation.

<br>

**Valgfri Opgave / Automatisk deployment**

> _Netlify:_

- Jeg har deployed min side via netlify som gør hele processen for at vise, sin website live og på mobil/tablet osv nem og hurtig, samtidig er den sat op til at hvis der laves en rettelse i Visual Studio Code, som pushes op til Github, redeployer netlify selv og opdatere siden med de nye ændringer.

<br>

**Vurdering af egen indsats:**

> _Opgaven:_

- jeg startede med at på tage en kopi af xd filen, og indramme de forskellige komponents i kasser, så jeg nemmere havde et overblik over hvad der skulle laves og kunne genbruges, hvorefter jeg fokuserede på at få grund designet lavet, så jeg havde noget at se på og gå udfra, hvorefter jeg gik mere fokuseret igang med at lave selve funktionaliteten.

- Jeg syntes at gøre det på den måde, og opdele mine arbejdsopgaver sådanne, det gav mig en god arbejdsmåde og selve opgaven har været udforderende, og fået mig til at afprøve mange nye måder at løse mine opgaver på, som har været spændende og interessant, samtidig har jeg lært en masse i processen.

> _Kanban Board:_

- Jeg havde på min væg hjemme, over mit pc setup lavee mit eget Kanban Board med gule & grønne stickers, for at være sikker på jeg havde noget at gå efter og holde styr på mine opgaver/planer.

<br>

**Argumentation for de valg jeg selv har taget.**

> _Søgeresultater på Search siden:_

- Jeg har valgt at vise de classes man får som resultatet i et enkelt resultat pr Row/linje, med hvis der er flere under, og genbrugt class card, men gjort det lidt større for bedre at kunne se hvert resultat.

> _Billeder til Welcome siden:_

- Billederne der var i opgave mappen til Welcome siden man skulle bruge, fyldte ca 24mb hver, grundet den ekstra loading tid det tilføjer, tog jeg og via adobe DX, og ændrede dem så de passer til web, de er nu png og fylder 6.5 mb per billede i stedet, hvilket reducere loading tiden en del.

> _Filter på store billeder:_

- Jeg har valgt at smide et filter på større billeder, så de virker lidt mørkere da den hvide navigation og teksten godt kunne være lidt svær at læse på nogle billeder.

> _Navigation på login siden:_

- På login siden har jeg beholdt menuen i toppen af højre hjørne i tilfældet af man fortrød eller ligende.

<br>

**Særlige punkter til bedømmelse**

> _Login-Form:_

```js
<form className={style_LoginForm} onSubmit={handleSubmit(mySubmit)}>
  <input
    type="text"
    name="username"
    id="username"
    placeholder="Enter your username..."
    ref={register({
      required: "Username Required",
      pattern: {
        value: /(^(([A-Za-z])+){2,}(([0-9])+)?$)|^[A-Za-z]{2}$|(^(([A-Za-z])+){1,}((([0-9])+){2,})$)/gm,
        message: "invalid Username",
      },
    })}
  />
  <input
    type="password"
    name="password"
    id="password"
    placeholder="Enter your password..."
    ref={register({
      required: "Password Required",
      minLength: { value: 4, message: "Try again, password to short" },
    })}
  />
  <div className={style_Validation}>
    {errors.username && <p>{errors.username.message}</p>}
    {errors.password && <p>{errors.password.message}</p>}
  </div>
  <button className={style_LoginBtn} type="submit">
    Log Ind
  </button>
</form>
```

> _Search:_

```js
const searchFunction = data?.filter((sort) => {
    if (searchTerm === "") {
    } else if (
      sort.className.toLowerCase().includes(searchTerm.toLowerCase()) +
      sort.trainer.trainerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) +
      sort.classDay.toLowerCase().includes(searchTerm.toLowerCase()) +
      sort.classDescription.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return sort;
    }
  });
```

> _Custom Hook / Fetching & Error Handling:_

```js
const UseMyFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((response) => { 
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
      return () => abortCont.abort();
    }, [url]);
    
    error && console.log(error);

  return { data, isPending, error };
};
```
