import { ResponsiveBox } from '@/components/ResponsiveBox';
import { PlayersSetup } from '@/modules/public/Register/PlayersSetup';

export default function Home() {
  return (
    <ResponsiveBox>
      <PlayersSetup />
    </ResponsiveBox>
  );
}
