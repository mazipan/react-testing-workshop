import { ThemeIcon, Text, UnstyledButton, Group } from '@mantine/core';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  label: string;
  href: string;
  icon: ReactElement;
  color: string;
}

function NavLink({ label, icon, color, href }: NavLinkProps) {
  return (
    <UnstyledButton<typeof Link> component={Link} to={href}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export default NavLink;