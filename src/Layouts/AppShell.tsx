import { AppShell, Navbar, Header, MediaQuery, Burger, Text, useMantineTheme, Footer, Center, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Movie, Users } from 'tabler-icons-react';


import NavLink from './NavLink';

function AppShellLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 300 }}>
          <Navbar.Section ml="-xs" mr="xs" px="xs">
            <NavLink label="Films" color="grape" icon={<Movie />} href="/films" />
            <NavLink label="People" color="red" icon={<Users />} href="/people" />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <UnstyledButton<typeof Link> component={Link} to="/"
              sx={(theme) => ({
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
              })}
            >
              <Text size="sm">🧪 React Testing Workshop</Text>
            </UnstyledButton>
          </div>
        </Header>
      }
      footer={
        <Footer height={60} p="md">
          <Center>
            &copy; 2022, by mazipan
          </Center>
        </Footer>
      }
    >
      <Outlet />
    </AppShell>
  );
}

export default AppShellLayout;