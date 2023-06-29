import CardFamous from "../components/CardFamous/CardFamous.tsx";
import Title from "../components/Title/Title.tsx";
import ButtonSeta from "../components/ButtonSeta/ButtonSeta.tsx";

export interface Props {
  title: string;
}

export default function GetStarted({ title }: Props) {
  const famoso =
    "https://evolutionnutritionlab.com.br/media/influencers/Inlfu_DedeSecco.jpg";

  return (
    <section class={"p-14"}>
      <Title
        title="A MARCA QUERIDINHA DOS FAMOSOS"
        subTitle="Recomendada pelos maiores influencers de vida saudável do Brasil"
      />
      <div class={"w-full relative"}>
        <ButtonSeta left="15px" />
        <div class={"hidden lg:flex justify-evenly"}>
          <CardFamous src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamous src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamous src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamous src={famoso} nome="Bianca Andrade" insta="bianca" />
        </div>
        <div class={" hidden md:flex lg:hidden flex justify-around"}>
          <CardFamous src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamous src={famoso} nome="Bianca Andrade" insta="bianca" />
        </div>
        <div class={" md:hidden flex justify-around"}>
          <CardFamous src={famoso} nome="Bianca Andrade" insta="bianca" />
        </div>
        <ButtonSeta right="15px" rotate={"rotate-180"} />
      </div>
    </section>
  );
}
