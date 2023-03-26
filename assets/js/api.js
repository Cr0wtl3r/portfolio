async function fetchProfileData() {
  // const url =
  //   "https://raw.githubusercontent.com/Albino-Marques/portfolio/main/data/profile.json";
  const url = "data/profile.json"
  const fetching = await fetch(url);
  return await fetching.json();
}
