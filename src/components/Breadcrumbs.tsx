import { Breadcrumbs as BreadcrumbsMantine, Anchor } from '@mantine/core';

interface BreadcrumbProps {
  title: string;
  href: string;
};

const HOME_LINK = { title: 'Home', href: '/' };

const renderItem = (items: BreadcrumbProps[]) => {
  return items.map((item) => (
    <Anchor href={item.href} key={item.href}>
      {item.title}
    </Anchor>
  ))
}


export default function Breadcrumbs({ items }: { items?: BreadcrumbProps[] }) {
  const itemsWithHome = items ? [HOME_LINK, ...items] : [HOME_LINK];

  return (
    <>
      <BreadcrumbsMantine>{renderItem(itemsWithHome)}</BreadcrumbsMantine>
    </>
  );
}