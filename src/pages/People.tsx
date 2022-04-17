import { SimpleGrid, Card, Group, Text, useMantineTheme } from "@mantine/core";
import Breadcrumbs from "../components/Breadcrumbs";
import usePeopleData, { Person } from "../hooks/usePeopleData";

export default function PeoplePage() {
  const { data, isLoading } = usePeopleData();
  const theme = useMantineTheme();

  return (
    <main>
      <Breadcrumbs items={[{ href: '/people', title: 'People' }]} />
      <SimpleGrid cols={4} mt="lg">
        {!isLoading && data && (
          data.map((person: Person) => {
            return (
              <Card shadow="sm" p="lg" key={person.id}>
                <Group position="apart" style={{ marginTop: theme.spacing.sm }}>
                  <Text weight={500}>{person.name}</Text>
                </Group>

                <Group position="apart">
                  <Text color="dimmed" size="sm">
                    {person.gender === "Male" ? "👨" : person.gender === "Female" ? "👩" : "👽"} {person.gender}
                  </Text>
                </Group>
              </Card>
            )
          })
        )}
      </SimpleGrid>
    </main>
  );
}