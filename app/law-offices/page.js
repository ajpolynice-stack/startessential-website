import IndustryTemplate from '../../components/IndustryTemplate';
import { industryPages } from '../../components/data';

export default function Page() {
  return <IndustryTemplate industry={industryPages['law-offices']} />;
}
