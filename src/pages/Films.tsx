import { SimpleGrid, Badge, Card, Group, Image, Text, useMantineTheme } from "@mantine/core";
import Breadcrumbs from "../components/Breadcrumbs";
import useFilmData, { Film } from "../hooks/useFilmData";

export default function FilmsPage() {
  const { data, isLoading } = useFilmData();
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <main>
      <Breadcrumbs items={[{ href: '/films', title: 'Films' }]} />
      <SimpleGrid cols={4} mt="lg">
        {!isLoading && data && (
          data.map((film: Film) => {
            return (
              <Card shadow="sm" p="lg" key={film.id}>
                <Card.Section>
                  <Image src={film.image} height={600} alt={film.title} />
                </Card.Section>

                <Group position="apart" style={{ marginTop: theme.spacing.sm }}>
                  <Text weight={500}>{film.title}</Text>
                  <Badge color="pink" variant="light">
                    🗓️ {film.release_date}
                  </Badge>
                </Group>

                <Group position="apart">
                  <Text color="dimmed" size="sm">
                    {film.director}
                  </Text>

                  <Badge color="blue" variant="light">
                    ⭐ {film.rt_score}
                  </Badge>
                </Group>

                <Text size="sm" style={{ marginTop: theme.spacing.md, color: secondaryColor, lineHeight: 1.5 }}>
                  {film.description}
                </Text>
              </Card>
            )
          })
        )}
      </SimpleGrid>
    </main>
  );
}