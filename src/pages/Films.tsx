import { SimpleGrid } from "@mantine/core";
import Breadcrumbs from "../components/Breadcrumbs";
import FilmCard from "../components/FilmCard";
import useFilmData, { Film } from "../hooks/useFilmData";

export default function FilmsPage() {
  const { data, isLoading } = useFilmData();

  return (
    <main>
      <Breadcrumbs items={[{ href: '/films', title: 'Films' }]} />
      <SimpleGrid cols={4} mt="lg">
        {!isLoading && data && (
          data.map((film: Film) => {
            return (
              <FilmCard film={film} key={film.id}/>
            )
          })
        )}
      </SimpleGrid>
    </main>
  );
}