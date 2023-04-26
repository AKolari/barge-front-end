import TopContent from "csc-start/components/TopContent";
import SocialLinks from "csc-start/components/SocialLinks";
import NonSocialLinks from "csc-start/components/NonSocialLinks";

export default async function Home() {
  return (
    <main>
      <TopContent />
      <SocialLinks />
      <NonSocialLinks />
    </main>
  );
}
