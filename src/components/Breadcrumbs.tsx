import { Breadcrumbs as BreadcrumbsMantine, Anchor } from '@mantine/core';

interface BreadcrumbItem {
  title: string;
  href: string;
};

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
};

const HOME_LINK = { title: 'Home', href: '/' };

const renderItem = (items: BreadcrumbItem[]) => {
  return items.map((item) => (
    <Anchor href={item.href} key={item.href}>
      {item.title}
    </Anchor>
  ))
}


export default function Breadcrumbs({ items }: BreadcrumbProps) {
  const itemsWithHome = items ? [HOME_LINK, ...items] : [HOME_LINK];

  return (
    <>
      <BreadcrumbsMantine>{renderItem(itemsWithHome)}</BreadcrumbsMantine>
    </>
  );
}