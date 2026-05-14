import ServiceTemplate from '../../../components/ServiceTemplate';
import { servicePages } from '../../../components/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) return {};
  return {
    title: `${service.name} | Essential Solutions`,
    description: service.subhead,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
