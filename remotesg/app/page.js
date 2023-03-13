import JobApp from "./(components)/JobApp";
import LandingPage from "./(components)/LandingPage";

export default async function Home() {
  const API_KEY = process.env.API_KEY;
  const baseId = "appXurtrhmRuY40SF";
  const tableId = "tbli0nSPDXsV60hOl";

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const data = await res.json();

  console.log(data.records);

  return (
    <main>
      <LandingPage />
      <JobApp data={data} />
    </main>
  );
}
