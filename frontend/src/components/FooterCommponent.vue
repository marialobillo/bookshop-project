<template>
  <footer>
    <div class="">
      <ul>
        <li>Pages</li>
        <li>About</li>
        <li>Terms & Condition</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="">
      <ul>
        <li>Top categories</li>
        <li>University</li>
        <li>Secondary</li>
        <li>Primary</li>
        <li>Top reads</li>
      </ul>
    </div>
    <div class="">
      <ul>
        <li>Where to find us</li>
        <li>9696 princess st</li>
        <li>Brookly,NY,11296</li>
      </ul>
    </div>
  </footer>
</template>
<style>
footer {
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: flex-start;
  width: 100%;
  margin-top: 50%;
  padding: 1em;
  margin-bottom: 0%;
  background-color: #333;
  color: white;
  column-gap: 20px;
  overflow: hidden;
  padding: 20px;
}
footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer li {
  margin: 10px 0;
}

footer a {
  color: white;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
